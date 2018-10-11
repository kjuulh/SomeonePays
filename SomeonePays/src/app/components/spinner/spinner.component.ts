import { Component, OnInit, Input } from "@angular/core";
import { Player } from "../../interfaces/player";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"]
})
export class SpinnerComponent implements OnInit {
  players: Array<Player>;
  numberOfRows: number;
  winner: string;
  constructor() {}

  ngOnInit() {
    this.players = [
      { name: "Kasper" },
      { name: "Søren" },
      { name: "Julie" },
      { name: "Tobias" }
    ];
  }

  spin() {
    if (this.players && !this.winner) {
      this.winner = this.players[
        Math.floor(Math.random() * Math.floor(this.players.length))
      ].name;
    }
  }
}
