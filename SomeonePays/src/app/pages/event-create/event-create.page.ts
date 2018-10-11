import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../../services/event/event.service";

@Component({
  selector: "app-event-create",
  templateUrl: "./event-create.page.html",
  styleUrls: ["./event-create.page.scss"]
})
export class EventCreatePage implements OnInit {
  public eventType: string = "";
  public eventChallengeType: string = "";

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  createEvent(
    eventName: string,
    eventDateObject: any,
    eventCost: number,
    eventType: string,
    eventChallengeType: string
  ): void {
    let eventDate: Date = new Date();

    if (eventChallengeType === "challenge") {
      if (eventDateObject === undefined) {
        return;
      } else if (
        eventDateObject.year === undefined ||
        eventDateObject.month === undefined ||
        eventDateObject.day === undefined
      ) {
        return;
      }
      eventDate = new Date(
        eventDateObject.year.value,
        eventDateObject.month.value - 1,
        eventDateObject.day.value
      );
    }
    if (eventType !== "savings" && eventType !== "payment") {
      return;
    }
    if (
      eventChallengeType !== "spinner" &&
      eventChallengeType !== "split" &&
      eventChallengeType !== "challenge"
    ) {
      return;
    }

    this.eventService
      .createEvent(
        eventName,
        eventDate,
        eventCost,
        eventType,
        eventChallengeType
      )
      .then(() => {
        this.router.navigateByUrl("");
      });
  }
}
