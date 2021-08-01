import T from './Technology';

const GITHUB_BUTTON_TEXT = "View on GitHub";
const PLAYSTORE_BUTTON_TEXT = "View on Play Store"

const PROJECTS = [
    {
        title: "FrappeJS CLI",
        description: "A Command Line Interface (CLI) for the FrappeJS framework which helps you to create, serve and build FrappeJS applications with ease.",
        url: "https://github.com/frappe/frappejs-cli",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.NODEJS]
    },
    {
        title: "WebRTC Video Calling",
        description: "A peer-to-peer web-based video calling application built entirely using Web RealTime Communication (WebRTC).",
        url: "https://github.com/anto-christo/webrtc-calling",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.HTML, T.CSS, T.JAVASCRIPT, T.NODEJS]
    },
    {
        title: "Tweak",
        description: "A cross-platform mobile application to provide interactive courses on English grammar and vocabulary.",
        url: "https://play.google.com/store/apps/details?id=com.tweakgrammar&hl=en_IN&gl=US",
        buttonText: PLAYSTORE_BUTTON_TEXT,
        techs: [T.REACT_NATIVE, T.PHP, T.SQL]
    },
    {
        title: "PDFMerge CLI",
        description: "A Command Line Interface (CLI) tool for quickly merging PDF files locally.",
        url: "https://github.com/anto-christo/pdfmerge-cli",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.NODEJS]
    },
    {
        title: "GitStarted",
        description: "A perfect place for exploring Open Source Projects on GitHub. Get project recommendations based on your past Open Source contribution experience.",
        url: "https://github.com/anto-christo/gitstarted",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.HTML, T.JAVASCRIPT, T.NODEJS, T.MONGODB]
    },
    {
        title: "Lords of the Isles",
        description: "A massive online multiplayer game. Explore the isles of the world, buy islands and ships to gather and trade resources to become the ultimate Lord of the Isles.",
        url: "https://github.com/anto-christo/Lords_of_the_Isles",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.BOOTSTRAP, T.JAVASCRIPT, T.NODEJS, T.MONGODB]
    },
    {
        title: "Inherent Resolve",
        description: "An action game based on the US-Iraq war that can be played using the keyboard or using the touch controls provided on the mobile interface by connecting the mobile and PC via a passcode.",
        url: "https://github.com/anto-christo/Inherent_Resolve",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.PHASERJS, T.NODEJS, T.MONGODB]
    },
    {
        title: "Space Rush",
        description: "A space-themed endless game. Manoeuvre your spaceship by dodging the asteroids and planets enroute while collecting fuels to stay afloat.",
        url: "https://github.com/anto-christo/space-rush",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.PHASERJS, T.NODEJS, T.MONGODB]
    }
];

export default PROJECTS;