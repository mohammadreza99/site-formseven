import { ProductInfo } from "./product-info";

export class Product extends ProductInfo {
    count: number;
    constructor() {
        super();
        this.count = 0;
    }
}
