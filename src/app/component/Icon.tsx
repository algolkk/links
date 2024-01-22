import { IconType } from "react-icons";

interface IconProps {
    icon: IconType;
}

export default function Icon({ icon: IconComponent }: IconProps) {
    return <IconComponent />;
}
