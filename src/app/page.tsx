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
                url={"http://github.com/algolkk"}
            />
            <Card
                icon={SiMisskey}
                text={"Misskey.io"}
                url={"http://github.com/algolkk"}
            />
            <Card
                icon={FaDiscord}
                text={"Discord"}
                url={"http://github.com/algolkk"}
            />
            <Card
                icon={FaInstagram}
                text={"Instagram"}
                url={"http://github.com/algolkk"}
            />
            <Card
                icon={FaSteam}
                text={"Steam"}
                url={"http://github.com/algolkk"}
            />
            <Card
                icon={FaGithub}
                text={"Github"}
                url={"http://github.com/algolkk"}
            />
        </div>
    );
}
