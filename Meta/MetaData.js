// function getMeta() {
    const meta = {
        "/": {
            title: "Blogs Home",
            description: " Sign in Page ",
            ogDescription: "description for the page",
            keywords:"content,blogs,writing"
        },
        "/contact": {
            title: "Blogs Contact",
            description: "Contact Page ",
            ogDescription: "Contact for blogs",
            keywords:"content writers,blog writers"
        
        },
        "/about": {
            title: "Blogs aboutus",
            description: " about Page ",
            ogDescription: "description for the page"
        },

        "/blogs": {
            title: "User Blogs",
            description: " Sign in Page ",
            ogDescription: "description for the page"
        },
        "/favicon.ico":{},
        "default": {
            title: "Demo blog App",
            description: "Demostrates React server side rendering",
        }
        
    }
    // return meta;
// }


module.exports = {
    metaData:meta
};