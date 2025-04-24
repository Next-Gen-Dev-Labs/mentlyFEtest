"use client";

import React, { createContext, useContext, useState } from "react";
import {
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import dynamic from "next/dynamic";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import { dummyData } from "@/lib/data";

export const DnDContextDynamic = dynamic(
  () => import("@dnd-kit/core").then((mod) => mod.DndContext),
  { ssr: false }
);

export type TWorkflow = {
  id: number;
  name: string;
  isActive: boolean;
};

interface WorkflowContextType {
  workflows: TWorkflow[];
  createWorkflow: (name: string) => void;
  editWorkflow: (id: number, name: string) => void;
  changeWorkflowStatus: (id: number) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  saveOrder: () => void;
  resetWorkflows: () => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(
  undefined
);

export function WorkflowProvider({ children }: { children: React.ReactNode }) {
  const [workflows, setWorkflows] = useState<TWorkflow[]>(dummyData.workflows);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const createWorkflow = (name: string) => {
    const newId = Math.max(...workflows.map((w) => w.id)) + 1;
    setWorkflows([...workflows, { id: newId, name, isActive: false }]);
  };

  const editWorkflow = (id: number, name: string) => {
    setWorkflows(
      workflows.map((workflow) =>
        workflow.id === id ? { ...workflow, name } : workflow
      )
    );
  };

  const resetWorkflows = () => {
    setWorkflows(dummyData.workflows);
  };

  const changeWorkflowStatus = (id: number) => {
    setWorkflows(
      workflows.map((workflow) =>
        workflow.id === id
          ? { ...workflow, isActive: !workflow.isActive }
          : workflow
      )
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setWorkflows((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const saveOrder = async () => {
    console.log("Saving new order:", workflows);
  };

  return (
    <WorkflowContext.Provider
      value={{
        workflows,
        createWorkflow,
        editWorkflow,
        changeWorkflowStatus,
        handleDragEnd,
        saveOrder,
        resetWorkflows,
      }}
    >
      <DnDContextDynamic
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={workflows.map((w) => w.id)}>
          {children}
        </SortableContext>
      </DnDContextDynamic>
    </WorkflowContext.Provider>
  );
}

export const useWorkflows = () => {
  const context = useContext(WorkflowContext);
  if (context === undefined) {
    throw new Error("useWorkflows must be used within a WorkflowProvider");
  }
  return context;
};
