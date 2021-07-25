import T from './Technology';

const GITHUB_BUTTON_TEXT = "View on GitHub";
const PLAYSTORE_BUTTON_TEXT = "View on Play Store"

const PROJECTS = [
    {
        title: "Tweak",
        description: "A cross-platform mobile application built using React Native to provide interactive courses on English grammar and vocabulary.",
        url: "https://play.google.com/store/apps/details?id=com.tweakgrammar&hl=en_IN&gl=US",
        buttonText: PLAYSTORE_BUTTON_TEXT,
        techs: [T.REACT_NATIVE, T.NODEJS]
    },
    {
        title: "FrappeJS CLI",
        description: "A Command Line Interface (CLI) for the FrappeJS framework which allows you to create, build and deploy FrappeJS applications with ease.",
        url: "https://github.com/frappe/frappejs-cli",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.NODEJS]
    },
    {
        title: "WebRTC Video Calling",
        description: "A peer-to-peer web-based video calling application built entirely using Web RealTime Communication (WebRTC).",
        url: "https://github.com/anto-christo/webrtc-calling",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.JAVASCRIPT, T.HTML, T.CSS]
    },
    {
        title: "Lords of the Isles",
        description: "A massive online multiplayer game. Explore the isles of the world, buy islands and ships to gather and trade resources to become the ultimate Lord of the Isles.",
        url: "https://github.com/anto-christo/Lords_of_the_Isles",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.NODEJS, T.BOOTSTRAP, T.MONGODB]
    },
    {
        title: "Inherent Resolve",
        description: "A simple action game built using JavaScript for Teknack 2018 that can be played using the keyboard or using the touch controls provided on the mobile interface by connecting the mobile and PC via a passcode.",
        url: "https://github.com/anto-christo/Inherent_Resolve",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.NODEJS, T.MONGODB, T.PHASERJS]
    },
    {
        title: "Space Rush",
        description: "A space-themed endless game built using JavaScript for Teknack 2017. Manoeuvre your spaceship by dodging the asteroids/planets enroute while collecting fuels to stay afloat.",
        url: "https://github.com/anto-christo/space-rush",
        buttonText: GITHUB_BUTTON_TEXT,
        techs: [T.NODEJS, T.MONGODB, T.PHASERJS]
    }
];

export default PROJECTS;