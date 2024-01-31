import { Icon } from "./Icon";
import Label from "./Label";
import { IconType } from "react-icons";
import styles from "../style/Card.module.css";
import React from "react";

interface CardProps {
    icon: IconType;
    text: string;
    url: string;
}

export const Card: React.FC<CardProps> = ({ icon, text, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.cardContainer}>
                <Icon icon={icon} />
                <Label text={text} />
            </div>
        </a>
    );
};

export default Card;
