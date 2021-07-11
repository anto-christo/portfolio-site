import TECHNOLOGY from './Technology';

const {
    JAVASCRIPT,
    REACT_NATIVE,
    NODEJS
} = TECHNOLOGY;

const GITHUB_BUTTON_TEXT = "View on GitHub";
const PLAYSTORE_BUTTON_TEXT = "View on Play Store"

const PROJECTS = [
    {
        title: "Tweak",
        description: "A cross-platform mobile application built using React Native to provide interactive courses on English grammar and vocabulary.",
        url: "https://play.google.com/store/apps/details?id=com.tweakgrammar&hl=en_IN&gl=US",
        buttonText: PLAYSTORE_BUTTON_TEXT,
        techs: [REACT_NATIVE, NODEJS]
    },
    {
        title: "WebRTC Video Calling",
        description: "A peer-to-peer web-based video calling application built entirely using Web RealTime Communication (WebRTC).",
        url: "https://github.com/anto-christo/webrtc-calling",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [JAVASCRIPT]
    },
    {
        title: "Lords of the Isles",
        description: "A massive online multiplayer game. Explore the isles of the world, buy islands and ships to gather and trade resources to become the ultimate Lord of the Isles.",
        url: "https://github.com/anto-christo/Lords_of_the_Isles",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [NODEJS]
    },
    {
        title: "Lords of the Isles",
        description: "A massive online multiplayer game. Explore the isles of the world, buy islands and ships to gather and trade resources to become the ultimate Lord of the Isles.",
        url: "https://github.com/anto-christo/Lords_of_the_Isles",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [NODEJS]
    }
];

export default PROJECTS;