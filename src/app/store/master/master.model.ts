export interface Category{
    categoryName: String,
    categoryId: Number,
    create?: Date,
    update?: Date,
    createdBy: Number,
    updatedBy?: Number
}
export interface MasterState {
    categories:Category[]
}