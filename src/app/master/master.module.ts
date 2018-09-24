import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MasterRoutingModule } from "./master.routing.module";
import { MasterComponent } from "./master.component";
import { CategoryComponent } from "./category/category.component";
import {
  MasterService,
  MasterEffect,
  reducer as masterReducer
} from "../store/master";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MasterRoutingModule,
    StoreModule.forFeature("master", masterReducer),
    EffectsModule.forFeature([MasterEffect])
  ],
  declarations: [MasterComponent, CategoryComponent],
  providers: [MasterService]
})
export class MasterModule {}
