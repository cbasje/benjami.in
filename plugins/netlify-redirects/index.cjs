const fs = require("fs");

const routes = {
    nl: {
        about: "over",
    },
};

module.exports = {
    onPostBuild: ({ constants }) => {
        console.log("Attempting to create dist/_redirects...");

        let red = "";
        for (const l in routes) {
            red += `/ /${l} 301! Language=${l}\n`;
            for (const r in routes[l]) {
                red += `/${r} /${l}/${routes[l][r]} 301! Language=${l}\n`;
            }
        }

        fs.appendFile(
            `${constants.IS_LOCAL ? "" : "/opt/build/repo/"}${
                constants.PUBLISH_DIR
            }/_redirects`,
            red,
            function (err) {
                if (err) {
                    console.log("Fail");
                    throw err;
                }
                console.log("Success");
            }
        );
    },
};
