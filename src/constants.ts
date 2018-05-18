import { IOptions } from "./typings";

export const config = {
  supportedImageTypes: ["jpeg", "png", "webp"],
  jpegBackground: "#fff",
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  }
};

export const defaultOptions: IOptions = {
  quality: 1,
  type: "png",
  offlineMode: true,
};

export const defaultPngShorthandOptions: IOptions = {
  type: "png"
};

export const defaultJpegShorthandOptions: IOptions = {
  type: "jpeg"
};

export const defaultWebpShorthandOptions: IOptions = {
  type: "webp"
};
