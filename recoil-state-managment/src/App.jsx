import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useRecoilValue ,RecoilRoot , useSetRecoilState , useRecoilState} from "recoil"
import './App.css'
import { completeNotificationsCount, dashboardAtom, JobsAtom, MessagesAtom, NetworkAtom, NotificationsAtom, totalNotificationsCount } from './assets/atoms'
import { useEffect } from 'react'

function MainApp() {
  const NetworkCount = useRecoilValue(NetworkAtom)
  const JobsCount = useRecoilValue(JobsAtom)
  const MessagesCount = useRecoilValue(MessagesAtom)
  const NotificationsCount = useRecoilValue(NotificationsAtom)
  const setJobsCount = useSetRecoilState(JobsAtom)
  const total = useRecoilValue(totalNotificationsCount)
  const [Dashboard , setdashboard] = useRecoilState(dashboardAtom)
  const complete = useRecoilValue(completeNotificationsCount)
  // useEffect(()=>{
  // fetch("https://sum-server.100xdevs.com/notifications")
  // .then(async(res)=>{
  //   const json = await res.json();
  //  setdashboard(json)
  // })
  // } , [])
  return (
    <>
    
    {/* <button  onClick={()=>{
      setJobsCount(JobsCount+1)
    }}>Home</button>

    <button>My Network({NetworkCount >= 100 ? "99+" :  NetworkCount})</button>
    <button>Jobs({JobsCount})</button>
    <button>Messages({MessagesCount})</button>
    <button>Notifications({NotificationsCount})</button>

    <button>Me-SivaDheeraj({total})</button> */}
     <button  onClick={()=>{
      setJobsCount(JobsCount+1)
    }}>Home</button>

    <button>My Network({Dashboard.network >= 100 ? "99+" :  Dashboard.network})</button>
    <button>Jobs({Dashboard.jobs})</button>
    <button>Messages({Dashboard.messaging})</button>
    <button>Notifications({Dashboard.notifications})</button>

    <button>Me-SivaDheeraj({complete})</button>
    
    </>
  )
}
function App(){
  return(
  <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
  )
}

export default App
