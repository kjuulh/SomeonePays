import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class EventService {
  public eventListRef: firebase.firestore.CollectionReference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.eventListRef = firebase
          .firestore()
          .collection(`/userProfile/${user.uid}/eventList`);
      }
    });
  }

  createEvent(
    eventName: string,
    eventDate: Date,
    eventCost: number,
    eventType: string,
    eventChallengeType: string
  ): Promise<firebase.firestore.DocumentReference> {
    return this.eventListRef.add({
      name: eventName,
      date: eventDate.toDateString(),
      cost: eventCost * 1,
      revenue: eventCost * 1,
      type: eventType,
      challengeType: eventChallengeType
    });
  }

  getEventList(): firebase.firestore.CollectionReference {
    return this.eventListRef;
  }

  getEventDetail(eventId: string): firebase.firestore.DocumentReference {
    return this.eventListRef.doc(eventId);
  }

  addGroupMember(
    groupMemberName: string,
    eventId: string
  ): Promise<firebase.firestore.DocumentReference> {
    return this.eventListRef
      .doc(eventId)
      .collection("groupMemberList")
      .add({ groupMemberName });
  }

  getGroupMembers(eventId: string): firebase.firestore.CollectionReference {
    return this.eventListRef.doc(eventId).collection("groupMemberList");
  }
}
