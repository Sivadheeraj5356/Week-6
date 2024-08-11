import {atom} from "recoil"

export const NetworkAtom = atom({
    default: 102,
    key : "NetworkCount"
})
export const JobsAtom = atom({
    default: 0,
    key : "JobsCount"
})
export const MessagesAtom = atom({
    default: 12,
    key : "MessagesCount"
})
export const NotificationsAtom = atom({
    default: 20,
    key : "NotificationsCount"
})