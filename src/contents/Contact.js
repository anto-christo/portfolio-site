const CONTACT = {
    Personal : {
        Email: {
            id: "anto.christo.20@gmail.com",
            get url() {
                return `mailto:${this.id}`;
            }
        },
        Phone: {
            id: "+91 8652 00 1978",
            get url() {
                return "tel:+918652001978";
            }
        }
    },
    Social: {
        GitHub: "https://github.com/anto-christo",
        LinkedIn: "https://www.linkedin.com/in/anto-christo",
        Twitter: "https://twitter.com/anto_christo",
        Medium: "https://medium.com/@anto.christo.20"
    }
};

export default CONTACT;