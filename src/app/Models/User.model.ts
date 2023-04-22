export class User {

    constructor(
        public id?: number,
        public fistName?: string,
        public lastName?: string,
        public password?: string,
        public email?: string,
        public photo?: String,
        public events: Event[] = []
    ) {
    }
}