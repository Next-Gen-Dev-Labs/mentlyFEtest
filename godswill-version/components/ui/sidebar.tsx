/** @format */
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PanelLeft } from 'lucide-react';
import * as React from 'react';
import { Sheet, SheetContent } from './sheet';

const SIDEBAR_COOKIE_NAME = 'sidebar:state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '240px';
const SIDEBAR_WIDTH_MOBILE = '240px';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContext = {
	state: 'expanded' | 'collapsed';
	open: boolean;
	setOpen: (open: boolean) => void;
	openMobile: boolean;
	setOpenMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

export function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context)
		throw new Error('useSidebar must be used within a SidebarProvider.');
	return context;
}

export const SidebarProvider = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'> & {
		defaultOpen?: boolean;
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	}
>(
	(
		{
			defaultOpen = true,
			open: openProp,
			onOpenChange: setOpenProp,
			className,
			style,
			children,
			...props
		},
		ref
	) => {
		const [openMobile, setOpenMobile] = React.useState(false);
		const [_open, _setOpen] = React.useState(defaultOpen);
		const open = openProp ?? _open;

		const setOpen = React.useCallback(
			(value: boolean | ((v: boolean) => boolean)) => {
				const newValue = typeof value === 'function' ? value(open) : value;
				setOpenProp ? setOpenProp(newValue) : _setOpen(newValue);
				document.cookie = `${SIDEBAR_COOKIE_NAME}=${newValue}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
			},
			[setOpenProp, open]
		);

		const isMobile = React.useMemo(() => window.innerWidth < 768, []);

		const toggleSidebar = React.useCallback(() => {
			isMobile ? setOpenMobile((v) => !v) : setOpen((v) => !v);
		}, [isMobile]);

		React.useEffect(() => {
			const onKey = (e: KeyboardEvent) => {
				if ((e.metaKey || e.ctrlKey) && e.key === SIDEBAR_KEYBOARD_SHORTCUT) {
					e.preventDefault();
					toggleSidebar();
				}
			};
			window.addEventListener('keydown', onKey);
			return () => window.removeEventListener('keydown', onKey);
		}, [toggleSidebar]);

		const state = open ? 'expanded' : 'collapsed';

		return (
			<SidebarContext.Provider
				value={{
					state,
					open,
					setOpen,
					openMobile,
					setOpenMobile,
					isMobile,
					toggleSidebar,
				}}>
				<div
					ref={ref}
					style={
						{
							'--sidebar-width': SIDEBAR_WIDTH,
							'--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
							...style,
						} as React.CSSProperties
					}
					className={cn(
						'group/sidebar-wrapper flex min-h-screen w-full',
						className
					)}
					{...props}>
					{children}
				</div>
			</SidebarContext.Provider>
		);
	}
);
SidebarProvider.displayName = 'SidebarProvider';

export const Sidebar = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'> & {
		side?: 'left' | 'right';
		variant?: 'sidebar' | 'floating' | 'inset';
		collapsible?: 'offcanvas' | 'icon' | 'none';
	}
>(
	(
		{
			side = 'left',
			variant = 'sidebar',
			collapsible = 'offcanvas',
			className,
			children,
			...props
		},
		ref
	) => {
		const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
		if (collapsible === 'none') {
			return (
				<div
					ref={ref}
					className={cn('flex h-full w-[--sidebar-width] flex-col', className)}
					{...props}>
					{children}
				</div>
			);
		}
		if (isMobile && collapsible === 'offcanvas') {
			return (
				<Sheet
					open={openMobile}
					onOpenChange={setOpenMobile}
					{...props}>
					<SheetContent
						data-sidebar='sidebar'
						data-mobile='true'
						className='w-[--sidebar-width] p-0 [&>button]:hidden'
						style={
							{ '--sidebar-width': SIDEBAR_WIDTH_MOBILE } as React.CSSProperties
						}
						side={side}>
						<div className='flex h-full w-full flex-col'>{children}</div>
					</SheetContent>
				</Sheet>
			);
		}

		return (
			<div
				ref={ref}
				className={cn('h-screen', className)}
				data-state={state}
				data-collapsible={state === 'collapsed' ? collapsible : ''}
				data-variant={variant}
				data-side={side}
				{...props}>
				{children}
			</div>
		);
	}
);
Sidebar.displayName = 'Sidebar';

export const SidebarContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		data-sidebar='content'
		className={cn('flex flex-col', className)}
		{...props}
	/>
));
SidebarContent.displayName = 'SidebarContent';

export const SidebarTrigger = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
	const { toggleSidebar } = useSidebar();
	return (
		<Button
			ref={ref}
			data-sidebar='trigger'
			variant='ghost'
			size='icon'
			className={cn('h-7 w-7', className)}
			onClick={(e) => {
				onClick?.(e);
				toggleSidebar();
			}}
			{...props}>
			<PanelLeft />
			<span className='sr-only'>Toggle Sidebar</span>
		</Button>
	);
});
SidebarTrigger.displayName = 'SidebarTrigger';
