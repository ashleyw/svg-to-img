"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    supportedImageTypes: ["jpeg", "png", "webp"],
    jpegBackground: "#fff",
    puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    }
};
exports.defaultOptions = {
    quality: 1,
    type: "png",
    offlineMode: true,
};
exports.defaultPngShorthandOptions = {
    type: "png"
};
exports.defaultJpegShorthandOptions = {
    type: "jpeg"
};
exports.defaultWebpShorthandOptions = {
    type: "webp"
};
