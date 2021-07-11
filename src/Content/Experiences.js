import TECHNOLOGY from './Technology';

const {
    JAVASCRIPT,
    NODEJS,
    JAVA
} = TECHNOLOGY;

const JUSTIFY = "text-justify"

const EXPERIENCES = [
    {
        name: "SAP Labs India",
        logo: require('../Assets/sap.png').default,
        url: "https://www.sap.com/index.html",
        position: "Scholar, Associate Software Developer",
        tenure: "August 2019 - Present",
        content: () => {
            return (
                <>
                    <p className={JUSTIFY}>At SAP Labs I have got the opportunity to work across multiple projects and domains with various responsibilities.</p>
                    <p className={JUSTIFY}>Contributed in the development of API automation library for the SAP Enable Now product using <span className={NODEJS.style}>NodeJS</span>.</p>
                    <p className={JUSTIFY}>Contributed as a Frontend Developer for SAP SuccessFactors and SAP S/4HANA. Have worked on delivering new User Interfaces and also on improvements to existing interfaces to make them more user friendly using <span className={JAVASCRIPT.style}>JavaScript</span>.</p>
                    <p className={JUSTIFY + " mb-0"}>Currently working as a Full Stack Developer with the SAP Industry Cloud suite of products and have delivered features on both the Frontend and Backend using <span className={JAVASCRIPT.style}>JavaScript</span> and <span className={JAVA.style}>Java</span> respectively.</p>
                </>
            )
        },
    }
];

export default EXPERIENCES;