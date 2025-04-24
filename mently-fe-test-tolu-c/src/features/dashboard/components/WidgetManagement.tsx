import { SidebarPortal } from "~/_components/ui";

export const WidgetManagement = ({
  open,
  close,
}: {
  open: boolean;
  close: VoidFunction;
}) => {
  return (
    <SidebarPortal open={open} close={close}>
      <div className="border w-full">WidgetManagement</div>
    </SidebarPortal>
  );
};
