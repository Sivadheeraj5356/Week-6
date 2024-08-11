import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useRecoilValue ,RecoilRoot , useSetRecoilState} from "recoil"
import './App.css'
import { JobsAtom, MessagesAtom, NetworkAtom, NotificationsAtom, totalNotificationsCount } from './assets/atoms'

function MainApp() {
  const NetworkCount = useRecoilValue(NetworkAtom)
  const JobsCount = useRecoilValue(JobsAtom)
  const MessagesCount = useRecoilValue(MessagesAtom)
  const NotificationsCount = useRecoilValue(NotificationsAtom)
  const setJobsCount = useSetRecoilState(JobsAtom)
  const total = useRecoilValue(totalNotificationsCount)
  return (
    <>
    
    <button  onClick={()=>{
      setJobsCount(JobsCount+1)
    }}>Home</button>

    <button>My Network({NetworkCount >= 100 ? "99+" :  NetworkCount})</button>
    <button>Jobs({JobsCount})</button>
    <button>Messages({MessagesCount})</button>
    <button>Notifications({NotificationsCount})</button>

    <button>Me-SivaDheeraj({total})</button>
    
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
