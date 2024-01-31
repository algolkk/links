import { IconType } from "react-icons";
import styles from "../style/Icon.module.css";

interface IconProps {
    icon: IconType;
}

export const Icon: React.FC<IconProps> = ({ icon: IconComponent }) => {
    return <IconComponent className={styles.icon} />;
};
