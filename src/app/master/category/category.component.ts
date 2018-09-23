import { Component, OnInit } from "@angular/core";
import {
  Category,
  MasterState,
  GetCategoryListAction,
  SaveCategoryListAction
} from "../../store/master";
import { Store } from "@ngrx/store";
import { Subscribable, Subscription } from "rxjs";
import { getCategoryList } from "../../store/master/master.selector";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  getCateListSubscription: Subscription;
  category: Category = { categoryId: 0, categoryName: "", createdBy: 0 };
  categoryList: Category[] = [];
  constructor(private store: Store<MasterState>) {}

  ngOnInit() {
    this.store.dispatch(new GetCategoryListAction("")); // empty string for now
    this.subscriptionInit();
  }
  subscriptionInit() {
    this.getCateListSubscription = this.store
      .select(getCategoryList)
      .subscribe((categoryL: Category[]) => {
        if (categoryL) {
          this.categoryList = categoryL;
        }
      });
  }
  addNewCategory() {
    this.store.dispatch(new SaveCategoryListAction(this.category)); 
  }
}
