import styles from "../style/Card.module.css";
import React from "react";

interface TitleProps {
    text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <div className={styles.titleContainer}>
            <p>{text}</p>
        </div>
    );
};

export default Title;
