import DropdownIcon from "@/app/assets/icons/DropdownIcon";
import { UserDetailsProps } from "@/app/types";
import Image from "next/image";
import profilePic from "@/app/assets/images/profilePic.png";
const UserDetails: React.FC<Partial<UserDetailsProps>> = ({
  imageSrc = "",
  name = "",
  plan = "",
}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Image
          src={imageSrc || profilePic}
          alt={name}
          className="w-11 aspect-square rounded-full object-cover"
        />
        <div className="flex flex-col">
          <small className="text-charcoalGray text-sm">{name}</small>
          <span>
            <small className="text-slateLavendar text-xs">{plan}</small>
            {plan.includes("Free") && (
              <strong className="text-linkBlue text-sm font-bold ml-2">
                Upgrade
              </strong>
            )}
          </span>
        </div>
      </div>
      <DropdownIcon />
    </div>
  );
};

export default UserDetails;
