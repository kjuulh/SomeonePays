import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { SpinnerComponent } from "./spinner.component";
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SpinnerComponent, PlayerComponent]
})
export class SpinnerModule {}
