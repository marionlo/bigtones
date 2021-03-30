module.exports = {
    content: ["./src/**/*.html", "./src/**/*.js"],
    extractors: [
        {
            extensions: ["html", "js"],
            extractor: class TailwindExtractor {
                static extract(content) {
                    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                }
            },
        },
    ],
};
