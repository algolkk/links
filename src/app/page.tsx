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
                justifyContent: "space-between",
                height: "100vh",
            }}
        >
            <div style={{ flex: 1 }}></div>
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
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
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
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
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
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
            </div>
            <div style={{ flex: 1 }}></div>
        </div>
    );
}
