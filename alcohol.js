class Alcohol extends Product {
    constructor(name, amount, buyingPrice, sellingPrice, margin, sellingPriceTtc, type, degree) {
        super(name, amount, buyingPrice, sellingPrice, margin, sellingPriceTtc, type);
        this.degree = degree;
    }
};