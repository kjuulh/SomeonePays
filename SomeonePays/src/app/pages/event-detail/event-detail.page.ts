import { Component, OnInit } from "@angular/core";
import { EventService } from "../../services/event/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-event-detail",
  templateUrl: "./event-detail.page.html",
  styleUrls: ["./event-detail.page.scss"]
})
export class EventDetailPage implements OnInit {
  public currentEvent: any = {};
  public groupMemberName = "";
  public groupMembers: Array<string> = [];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const eventId: string = this.route.snapshot.paramMap.get("id");
    this.eventService
      .getGroupMembers(eventId)
      .get()
      .then(groupMembersSnapshot => {
        groupMembersSnapshot.forEach(groupMember => {
          this.groupMembers.push(groupMember.data().groupMemberName);
        });
      })
      .then(() => {
        this.eventService
          .getEventDetail(eventId)
          .get()
          .then(eventSnapshot => {
            this.currentEvent = eventSnapshot.data();
            this.currentEvent.id = eventSnapshot.id;
          });
      });
  }

  addGroupMember(groupMemberName: string): void {
    this.eventService
      .addGroupMember(groupMemberName, this.currentEvent.id)
      .then(() => (this.groupMemberName = ""));
  }
}
