import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  MasterService,
  MasterEffect,
  reducer as masterReducer
} from "../store/master";
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("user", masterReducer),
    EffectsModule.forFeature([MasterEffect])  
  ],
  declarations: [],
  providers:[MasterService]
})
export class MasterModule { }
