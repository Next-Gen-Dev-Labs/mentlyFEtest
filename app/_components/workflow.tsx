"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useWorkflows } from "@/contexts/workflows-context";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MenuIcon } from "lucide-react";

interface WorkflowItemProps {
  id: number;
  name: string;
  isActive: boolean;
  onStatusChangeAction: (id: number) => void;
}

export const WorkflowItem = ({
  id,
  name,
  isActive,
  onStatusChangeAction,
}: WorkflowItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="flex items-center justify-between gap-4"
      ref={setNodeRef}
      style={style}
    >
      <div className="flex flex-1 items-center gap-1.5 text-foreground">
        <button
          className="text-muted-foreground p-1 active:cursor-grabbing hover:cursor-grab"
          type="button"
          {...attributes}
          {...listeners}
        >
          <MenuIcon className="size-4" />
        </button>
        <p className="text-sm font-bold">{name}</p>
      </div>

      <Checkbox
        checked={isActive}
        onCheckedChange={() => onStatusChangeAction(id)}
        className="data-[state=checked]:bg-success data-[state=checked]:text-white size-[1.125rem] rounded-xs border data-[state=checked]:border-success text-foreground border-foreground"
      />
    </div>
  );
};

export const WorkflowList = ({
  onSaveChanges,
}: {
  onSaveChanges?: () => void;
}) => {
  const { workflows, changeWorkflowStatus, resetWorkflows } = useWorkflows();

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {workflows.map((workflow) => (
          <li key={workflow.id}>
            <WorkflowItem
              id={workflow.id}
              name={workflow.name}
              isActive={workflow.isActive}
              onStatusChangeAction={changeWorkflowStatus}
            />
          </li>
        ))}
      </ul>

      <div className="flex justify-stretch sm:items-center mt-10 flex-row items-stretch md:gap-6 sm:gap-4 gap-2">
        <Button onClick={onSaveChanges} className="h-10 flex-1">
          Save Changes
        </Button>
        <Button
          type="button"
          onClick={resetWorkflows}
          variant="outline-primary"
          className="h-10 flex-1 text-accent-foreground"
        >
          Reset to Default
        </Button>
      </div>
    </div>
  );
};
