import { Card } from "./component/Card";
import { Title } from "./component/Title";
import { FaTwitch, FaSteam, FaGithub } from "react-icons/fa";
import { SiMisskey } from "react-icons/si";

export default function Home() {
    const urlMisskey = "https://misskey.io/@algolkk";
    const urlTwitch = "https://www.twitch.tv/algolkalam";
    const urlSteam = "https://steamcommunity.com/profiles/76561199177189397/";
    const urlGithub = "https://github.com/algolkk";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "40rem",
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Title text={"AlgolKalam"} />

                <Card icon={SiMisskey} text={"Misskey.io"} url={urlMisskey} />
                <Card icon={FaTwitch} text={"Twitch"} url={urlTwitch} />

                <Card icon={FaSteam} text={"Steam"} url={urlSteam} />
                <Card icon={FaGithub} text={"Github"} url={urlGithub} />
            </div>
        </div>
    );
}
