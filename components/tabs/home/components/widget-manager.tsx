import {
	closestCenter,
	DndContext,
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import React, {
	ChangeEvent,
	CSSProperties,
	FormEvent,
	memo,
	useEffect,
	useRef,
} from "react";
import { useWidgetManagerContext } from "../contexts/widget-manager-context";
import {
	HomeWidgetsKeys,
	useHomeWidgetsContext,
} from "../contexts/widgets-context";
import widgets from "../contexts/widgets-context/widgets.config";

export default function WidgetManager() {
	const widgetManagerDialogRef = useRef<HTMLDialogElement | null>(null);
	const { isWidgetManagerOpen, closeWidgetsManager } =
		useWidgetManagerContext();
	const {
		homeWidgets,
		removeHomeWidget,
		addHomeWidget,
		resetHomeWidget,
		reorderHomeWidgets,
		saveHomeWidgets,
	} = useHomeWidgetsContext();

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if (active.id === over?.id) return;

		const oldIndex = homeWidgets.indexOf(active.id as HomeWidgetsKeys);
		const newIndex = homeWidgets.indexOf(over?.id as HomeWidgetsKeys);

		reorderHomeWidgets(oldIndex, newIndex);
	};

	useEffect(() => {
		const widgetManagerDialog = widgetManagerDialogRef.current;

		if (!widgetManagerDialog) return;

		if (isWidgetManagerOpen) {
			widgetManagerDialog.showModal();
		} else {
			widgetManagerDialog.close();
		}

		return () => {
			if (widgetManagerDialog.open) {
				widgetManagerDialog.close();
			}
		};
	}, [isWidgetManagerOpen]);

	const handleSave = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		saveHomeWidgets();
		closeWidgetsManager();
	};

	return (
		<dialog
			ref={widgetManagerDialogRef}
			onClose={closeWidgetsManager}
			className="fixed top-0 right-0 bottom-0 left-auto h-full max-h-none w-full max-w-md translate-x-full overflow-x-clip overflow-y-auto bg-white opacity-0 transition-all transition-discrete duration-250 backdrop:bg-transparent backdrop:backdrop-blur-xs backdrop:transition-all backdrop:transition-discrete backdrop:duration-250 open:translate-x-0 open:opacity-100 open:backdrop:opacity-100 starting:translate-x-full starting:opacity-0 starting:open:backdrop:opacity-0"
		>
			<header className="sticky top-0 shadow backdrop-blur-md">
				<div className="mx-auto flex h-20 w-11/12 items-center lg:w-5/6">
					<button
						type="button"
						className="ml-auto text-2xl"
						onClick={closeWidgetsManager}
					>
						<Icon icon="hugeicons:multiplication-sign" />
					</button>
				</div>
			</header>
			<div className="mx-auto mt-18 mb-8 w-11/12 space-y-4 text-xs lg:w-5/6">
				<h2 className="text-3xl font-bold text-[#6f01d0]">Manage Widgets</h2>
				<p>
					Personalize your dashboard by managing widgets add, remove, or reorder
					them to fit your workflow.
				</p>
			</div>
			<form onSubmit={handleSave} className="mx-auto mb-18 w-11/12 lg:w-5/6">
				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
				>
					<SortableContext
						items={homeWidgets}
						strategy={verticalListSortingStrategy}
					>
						<ul
							className={clsx(
								"mb-10 space-y-2",
								"[&>li]:flex [&>li]:items-center [&>li]:p-2",
								"[&>li>label]:ml-4 [&>li>label]:text-sm [&>li>label]:font-bold",
							)}
						>
							{homeWidgets.map((widgetKey) => {
								const widget = widgets.find(
									(widget) => widget.key === widgetKey,
								);

								if (!widget) return null;

								return (
									<SortableItem
										key={widget.key}
										id={widget.key}
										label={widget.label}
										isChecked={homeWidgets.includes(widget.key)}
										onCheckboxChange={({ target: { checked, value } }) =>
											checked
												? addHomeWidget(value as HomeWidgetsKeys)
												: removeHomeWidget(value as HomeWidgetsKeys)
										}
									/>
								);
							})}
							{widgets
								.filter((widget) => !homeWidgets.includes(widget.key))
								.map((widget) => (
									<li
										key={widget.key}
										style={{ viewTimelineName: `widget-item-${widget.key}` }}
									>
										<Icon
											icon="famicons:reorder-four-outline"
											className="opacity-12.5"
										/>
										<label htmlFor={widget.key}>{widget.label}</label>
										<input
											type="checkbox"
											id={widget.key}
											value={widget.key}
											onChange={({ target: { checked, value } }) =>
												checked && addHomeWidget(value as HomeWidgetsKeys)
											}
											className="widget-checkbox"
										/>
									</li>
								))}
						</ul>
					</SortableContext>
				</DndContext>
				<div className="grid grid-cols-2 gap-6 text-xs font-bold text-[#6f01d0] *:rounded-md *:border *:border-[#6f01d0] *:py-3">
					<button
						type="button"
						className="bg-[#6f01d0] text-white"
						onClick={resetHomeWidget}
					>
						Reset to Default
					</button>
					<button type="submit" className="">
						Save Changes
					</button>
				</div>
			</form>
		</dialog>
	);
}

const SortableItem = memo(
	({
		id,
		label,
		isChecked,
		onCheckboxChange,
	}: Readonly<{
		id: HomeWidgetsKeys;
		label: (typeof widgets)[number]["label"];
		isChecked: boolean;
		onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
	}>) => {
		const { attributes, listeners, setNodeRef, transform, transition } =
			useSortable({ id });

		const style: CSSProperties = {
			transform: CSS.Transform.toString(transform),
			transition,
			// viewTransitionName: `widget-item-${id}`,
		};

		return (
			<li ref={setNodeRef} style={style}>
				<button
					type="button"
					{...listeners}
					{...attributes}
					className="cursor-grab active:cursor-grabbing"
				>
					<Icon icon="famicons:reorder-four-outline" />
				</button>
				<label htmlFor={id}>{label}</label>
				<input
					type="checkbox"
					id={id}
					value={id}
					checked={isChecked}
					onChange={onCheckboxChange}
					className="widget-checkbox"
				/>
			</li>
		);
	},
);

SortableItem.displayName = "SortableItem";
