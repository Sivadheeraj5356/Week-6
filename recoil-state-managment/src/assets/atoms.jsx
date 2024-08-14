import {atom , selector} from "recoil"
import axios from "axios"
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
export const dashboardAtom = atom({
       key : "dashboardAtom" , 
       default : selector({
        key : "dashboardSelector" ,
        get : async()=>{
            // fetch("https://sum-server.100xdevs.com/notifications")
            // .then(async (res)=>{
            //     const data = await res.json()
            //     return data
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
            // })
        } 
       })
})
export const completeNotificationsCount = selector({
      key : "completeNotificationsCount" ,
      get : ({get}) =>{
        const completeNotificationsCount = get(dashboardAtom)
         return completeNotificationsCount.network + completeNotificationsCount.jobs +  completeNotificationsCount.messaging + completeNotificationsCount.notifications
      }
})