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
            <Card
                icon={FaTwitch}
                text={"Twitch"}
                url={"https://www.twitch.tv/"}
            />
            <Card
                icon={SiMisskey}
                text={"Misskey.io"}
                url={"https://misskey.io/"}
            />
            <Card
                icon={FaDiscord}
                text={"Discord"}
                url={"https://discord.com/"}
            />
            <Card
                icon={FaInstagram}
                text={"Instagram"}
                url={"https://www.instagram.com/"}
            />
            <Card
                icon={FaSteam}
                text={"Steam"}
                url={"https://store.steampowered.com/"}
            />
            <Card
                icon={FaGithub}
                text={"Github"}
                url={"http://github.com/algolkk"}
            />
        </div>
    );
}
