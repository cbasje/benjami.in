// import fs from "node:fs";
const fs = require("fs");

// export const onPostBuild = function ({ constants }) {
//     console.log("Attempting to append _redirects to dist/_redirects...");
//     fs.readFile("/opt/build/repo/_redirects", "utf-8", function (err, data) {
//         console.log("🚀 ---------------🚀");
//         console.log("🚀 ~ data:", data);
//         console.log("🚀 ---------------🚀");

//         if (err) {
//             console.log(
//                 "Failed to read redirects, do you have a '_redirects' file in the root of your project?"
//             );
//             throw err;
//         }
//         fs.appendFile(
//             `/opt/build/repo/${constants.PUBLISH_DIR}/_redirects`,
//             "\n" + data,
//             function (err) {
//                 if (err) {
//                     console.log("Fail");
//                     throw err;
//                 }
//                 console.log("Success");
//             }
//         );
//     });
// };

const routes = {
    nl: {
        "/about": "/over",
    },
};

module.exports = {
    onPostBuild: ({ constants }) => {
        console.log("Attempting to create dist/_redirects...");
        console.log("🚀 ~ constants:", constants);

        let red = "";
        for (const l in routes) {
            red += `/ /${l} 301! Language=${l}\n`;
            for (const r in routes[l]) {
                red += `${r} /${l}${r} 301! Language=${l}\n`;
            }
        }
        console.log("🚀 ~ red:", red);

        fs.appendFile(
            `/opt/build/repo/${constants.PUBLISH_DIR}/_redirects`,
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
