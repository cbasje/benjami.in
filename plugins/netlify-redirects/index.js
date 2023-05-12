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
module.exports = {
    onPostBuild: ({ constants }) => {
        console.log("Attempting to append _redirects to dist/_redirects...");
        fs.readFile(
            "/opt/build/repo/_redirects",
            "utf-8",
            function (err, data) {
                console.log("🚀 ---------------🚀");
                console.log("🚀 ~ data:", data);
                console.log("🚀 ---------------🚀");

                if (err) {
                    console.log(
                        "Failed to read redirects, do you have a '_redirects' file in the root of your project?"
                    );
                    throw err;
                }
                fs.appendFile(
                    `/opt/build/repo/${constants.PUBLISH_DIR}/_redirects`,
                    "\n" + data,
                    function (err) {
                        if (err) {
                            console.log("Fail");
                            throw err;
                        }
                        console.log("Success");
                    }
                );
            }
        );
    },
};
