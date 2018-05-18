export interface IBoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface IOptions {
    path?: string;
    type?: "jpeg" | "png" | "webp";
    quality?: number;
    width?: number;
    height?: number;
    clip?: IBoundingBox;
    background?: string;
    encoding?: "base64" | "utf8" | "binary" | "hex";
    offlineMode?: boolean;
    renderTimeout?: number;
}
export interface IShorthandOptions extends IOptions {
    type?: never;
}
