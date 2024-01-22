import Icon from "./Icon";
import Label from "./Label";
import { IconType } from "react-icons";
import styles from "./../css/Card.module.css";

interface CardProps {
    icon: IconType;
}

export const Card: React.FC<CardProps> = ({ icon }) => {
    return (
        <div className={styles.cardContainer}>
            <Icon icon={icon} />
            <Label />
        </div>
    );
};
