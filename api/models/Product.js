class Product extends MongooseModel {
    static schema = {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String },
    }
}