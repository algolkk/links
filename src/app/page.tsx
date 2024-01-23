import { Card } from "./component/Card";
import {
    FaRegHeart,
    FaRegComment,
    FaRegShareSquare,
    FaTwitch,
    FaDiscord,
    FaInstagram,
    FaSteam,
    FaGithub,
} from "react-icons/fa";
import { SiMisskey } from "react-icons/si";

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
            <Card icon={FaTwitch} text={"Twitch"} />
            <Card icon={SiMisskey} text={"Misskey.io"} />
            <Card icon={FaDiscord} text={"Discord"} />
            <Card icon={FaInstagram} text={"Instagram"} />
            <Card icon={FaSteam} text={"Steam"} />
            <Card icon={FaGithub} text={"Github"} />
        </div>
    );
}
