import GalleryIcon from "../assets/icons/GalleryIcon";
import LinkIcon from "../assets/icons/LinkIcon";
import MathIcon from "../assets/icons/MathIcon";
import QuoteDownIcon from "../assets/icons/QuoteDownIcon";
import QuoteUp from "../assets/icons/QuoteUp";
import SmallCapsIcon from "../assets/icons/SmallCapsIcon";
import TaskIcon from "../assets/icons/TaskIcon";
import TextAlignCenterIcon from "../assets/icons/TextAlignCenterIcon";
import TextAlignJustifyCenterIcon from "../assets/icons/TextAlignJustifyCenterIcon";
import TextAlignLeftIcon from "../assets/icons/TextAlignLeftIcon";
import TextAlignRightIcon from "../assets/icons/TextAlignRightIcon";
import TextBoldIcon from "../assets/icons/TextBoldIcon";
import TextIcon from "../assets/icons/TextIcon";
import TextItalicIcon from "../assets/icons/TextItalicIcon";
import TextUnderlineIcon from "../assets/icons/TextUnderlineIcon";
import { EditorActions, EditorActionsType } from "../types";

export const returnDefaultColor = (isActive: boolean) => {
  return isActive ? "#1F0954" : "#C2C2C2";
};

export const returnTextEditorIcons = (
  onClickIcon: (action: EditorActions) => void
): EditorActionsType => {
  return [
    <TextIcon onClick={() => onClickIcon("text")} key={0} />,
    <TextBoldIcon onClick={() => onClickIcon("textBold")} key={1} />,
    <TextItalicIcon onClick={() => onClickIcon("textItalic")} key={2} />,
    <TextUnderlineIcon onClick={() => onClickIcon("textUnderline")} key={3} />,
    <SmallCapsIcon onClick={() => onClickIcon("smallCaps")} key={4} />,
    <TextAlignLeftIcon onClick={() => onClickIcon("textAlignLeft")} key={5} />,
    <TextAlignRightIcon
      onClick={() => onClickIcon("textAlignRight")}
      key={6}
    />,
    <TextAlignCenterIcon
      onClick={() => onClickIcon("textAlignCenter")}
      key={7}
    />,
    <TextAlignJustifyCenterIcon
      key={8}
      onClick={() => onClickIcon("textAlignJustifyCenter")}
    />,
    <TaskIcon onClick={() => onClickIcon("task")} key={9} />,
    <QuoteUp onClick={() => onClickIcon("quoteUp")} key={10} />,
    <QuoteDownIcon onClick={() => onClickIcon("quoteDown")} key={11} />,
    <MathIcon onClick={() => onClickIcon("math")} key={12} />,
    <GalleryIcon onClick={() => onClickIcon("gallery")} key={13} />,
    <LinkIcon onClick={() => onClickIcon("link")} key={14} />,
  ];
};

export const formatTime = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const getOrdinal = (d: number): string => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month} ${year}, ${time}`;
};
