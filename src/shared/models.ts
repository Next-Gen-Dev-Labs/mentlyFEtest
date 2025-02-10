import { JSX } from "react";

export interface FontSizeOption {
  label: string;
  value: string;
}
export interface SidebarItem {
  id: number;
  label: string;
  icon?: JSX.Element;
  path: string;
  isDisabled?: boolean;
}

export interface DropdownItem {
  label: string;
  onClick?: () => void;
}

export interface InfoBoxProps {
  message: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

export interface CollapseItemProps {
  id: number;
  label: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onClick: (id: number) => void;
}
