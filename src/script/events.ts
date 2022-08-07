
export const AVATAR_CLAIMED = "avatar-claimed";
export const USER_LOGGED_IN = "user-logged-in";

/**
 * @emits 
 */
class AppEvents extends EventTarget {
    constructor() {
        super();
    }

    raiseUserLoggedIn() {

    }
}

const appEvents = new AppEvents;

export const getAppEventsInstance = () => appEvents;