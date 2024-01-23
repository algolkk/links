import React from "react";

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return <p>{text}</p>;
};

export default Label;
