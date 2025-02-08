import { Switch } from "./ui/switch";

type Props = {
  isChecked: boolean;
  changeHandler: (checked: boolean) => void;
}

export default function ThemeToggle({isChecked, changeHandler}: Props) {
  return (
    <Switch
      checked={isChecked}
      onCheckedChange={changeHandler}
      aria-readonly
      className="bg-white"
    />
  );
}
