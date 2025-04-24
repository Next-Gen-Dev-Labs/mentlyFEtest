import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface WidgetProps {
  widgetName: string;
  widgetSelected: boolean;
  toggleSelectWidget: (widgetName: string) => void;
}

export default function WidgetPicker({
  widgetName,
  widgetSelected,
  toggleSelectWidget,
}: WidgetProps) {
  return (
    <div className="flex flex-row justify-between items-center rounded-lg">
      <div className="flex flex-row gap-x-3 items-center">
        <DensitySmallIcon />
        <span>{widgetName}</span>
      </div>
      {widgetSelected ? (
        <CheckBoxIcon
          onClick={() => toggleSelectWidget(widgetName)}
          className="text-[#07C500] cursor-pointer"
        />
      ) : (
        <CheckBoxOutlineBlankIcon
          onClick={() => toggleSelectWidget(widgetName)}
          className="text-[#07C500] cursor-pointer"
        />
      )}
    </div>
  );
}
