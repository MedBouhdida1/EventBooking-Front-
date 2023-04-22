import { Organizer } from "./Organizer.model";
import { User } from "./User.model";
import { Venue } from "./Venue.model";

export class Event {

    constructor(
        public id?: string,
        public name?: string,
        public category?: string,
        public date?: string,
        public time?: string,
        public duration?: string,
        public banner?: string,
        public description?: string,
        public price?: string,
        public organizer?: Organizer,
        public venue?: Venue,
        public users: User[] = []

    ) {

    }
}