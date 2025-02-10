import { SetStateAction } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className: string;
  fill: string;
  stroke: string;
  isActive: boolean;
}

export type IconTypes = Partial<IconProps>;

export interface UserDetailsProps {
  name: string;
  plan: string;
  imageSrc: string;
}

export interface ContextState {
  modalName: string;
}

export interface ContextType<T extends object> {
  contextState: ContextState;
  contextDispatch: React.Dispatch<SetStateAction<T>>;
}

export type HoverDropdownProps = Partial<{
  icon: React.ReactNode;
  list: string[];
  onClickItem: (item?: string, index?: number) => void;
}>;

export type EditorActions =
  | "text"
  | "textBold"
  | "textItalic"
  | "textUnderline"
  | "smallCaps"
  | "textAlignLeft"
  | "textAlignRight"
  | "textAlignCenter"
  | "textAlignJustifyCenter"
  | "task"
  | "quoteUp"
  | "quoteDown"
  | "math"
  | "gallery"
  | "link";

export type EditorActionsType = React.ReactNode[];

export interface ProgramInfoTextCardProps {
  title: string;
  content: React.ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  purpleBg: boolean;
  purpleText: boolean;
  darkBorder: boolean;
  darkBlueBg: boolean;
  greyText: boolean;
  whiteText: boolean;
  whiteBorder: boolean;
  verticalAlign: boolean;
  fullWidth: boolean;
  borderRadius: string;
  width: string;
  padding: string;
  extraClasses: string;
}
