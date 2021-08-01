import T from './Technology';

const EXPERIENCES = [
    {
        name: "SAP Labs India",
        url: "https://www.sap.com/index.html",
        position: "Associate Software Developer, Scholar",
        tenure: "Aug 2019 - Present",
        content: "Contributed to the Frontend and Backend development of products like SAP Enable Now, SAP SuccessFactors, and flagship products like SAP S/4HANA and SAP Industry Cloud.",
        techs: [T.JAVASCRIPT, T.NODEJS, T.JAVA]
    },
    {
        name: "Frappe",
        url: "https://frappe.io",
        position: "Software Development Intern",
        tenure: "Dec 2018 - Jan 2019",
        content: "Developed the FrappeJS Command Line Interface (CLI) and the Invoice Customisation interface for Frappe Accounting application.",
        techs: [T.VUEJS, T.ELECTRON, T.NODEJS, T.SQL]
    },
    {
        name: "ERPNext",
        url: "https://erpnext.com",
        position: "Student Developer",
        tenure: "Apr 2018 - Oct 2018",
        content: "Contributed to the research and development of peer-to-peer realtime communication support in FrappeJS using Web RealTime Communication technology.",
        techs: [T.JAVASCRIPT, T.NODEJS]
    }
];

export default EXPERIENCES;