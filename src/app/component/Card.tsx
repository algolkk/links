import { Icon } from "./Icon";
import Label from "./Label";
import { IconType } from "react-icons";
import styles from "./Card.module.css";
import React from "react";

interface CardProps {
    icon: IconType;
    text: string;
}

export const Card: React.FC<CardProps> = ({ icon, text }) => {
    return (
        <div className={styles.cardContainer}>
            <Icon icon={icon} />
            <Label text={text} />
        </div>
    );
};

export default Card;
