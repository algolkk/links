import { Card } from "./component/Card";
import { FaRegHeart, FaRegComment, FaRegShareSquare } from "react-icons/fa";

export default function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Card icon={FaRegHeart} />
            <Card icon={FaRegComment} />
            <Card icon={FaRegShareSquare} />
        </div>
    );
}
