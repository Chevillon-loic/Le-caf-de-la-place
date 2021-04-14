class Product {
    constructor(name, amount, buyingPrice, sellingPrice, margin, sellingPriceTtc, type) {
        this.name = name;
        this.amount = amount;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
        this.margin = margin;
        this.sellingPriceTtc = sellingPriceTtc;
        this.type = type;
        this.id = name + Date.now();
    }
};
