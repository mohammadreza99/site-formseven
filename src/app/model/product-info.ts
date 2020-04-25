import { Color } from "./color";
import { Image } from "./image";

export class ProductInfo {
    public id: string;
    public code: string;
    public name: string;
    public category: string;
    public description: string;
    public group: string;
    public color: Color[];
    public price: number;
    public size: number[];
    public rating: number;
    public tags: string[];
    public promo:number;
    public images:Image[];
}

