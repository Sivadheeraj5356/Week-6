import {atom , selector} from "recoil"

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
export const totalNotificationsCount = selector({
    key : "totalNotificationsCount",
    get : ({get}) =>{
        const networkCount = get(NetworkAtom)
        const jobsCount = get(JobsAtom)
        const messagesCount = get(MessagesAtom)
        const notificationsCount = get(NotificationsAtom)
        return networkCount + jobsCount + messagesCount + notificationsCount
    }
})