import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { EventDetailPage } from "./event-detail.page";
import { SpinnerComponent } from "../../components/spinner/spinner.component";

const routes: Routes = [
  {
    path: "",
    component: EventDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventDetailPage, SpinnerComponent]
})
export class EventDetailPageModule {}
