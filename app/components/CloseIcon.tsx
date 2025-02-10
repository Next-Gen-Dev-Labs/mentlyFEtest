import { IconTypes } from "../types";

const CloseIcon:React.FC<IconTypes> = ({className}) => {
  return <button className={` ${className}`}>×</button>;
};

export default CloseIcon;
