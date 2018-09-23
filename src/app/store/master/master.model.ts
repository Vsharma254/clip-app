export interface Category{
    categoryName: String,
    categoryId: Number,
    create?: Date,
    update?: Date,
    createdBy: Number,
    updatedBy?: Number,
    CreatedByName?:string
}
export interface MasterState {
    categories:Category[]
}