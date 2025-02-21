import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Component/Landing'
import Complaining from './Component/Complaining'
import Review from './Component/Review'

function App() {
    const [User, setUser] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [ReviewMessage, setReviewMessage] = useState('');
    const [ComplainMessage, setComplainMessage] = useState('');

    const handleReview=(event)=>{
      setReviewMessage(event.target.value)
    }
    const handleComplain=(event)=>{
      setComplainMessage(event.target.value)
    }
    const handlelMobile=(event)=>{
      setMobile(event.target.value)
    }
    const handleEmail=(event)=>{
      setEmail(event.target.value)
    }
    const handleUser=(event)=>{
      setUser(event.target.value)
    }

    const complain =[
      {id:1, title:'Full Name :', change:handleUser, value:User},
      {id:1, title:'Email :', change:handleEmail, value:Email},
      {id:2, title:'Mobile:', change:handlelMobile, value:Mobile},
      {id:3, title:'complain', change:handleComplain, value:ComplainMessage}
    ]
    const review =[
      {id:1, title:'Full Name :', change:handleUser, value:User},
      {id:1, title:'Email :', change:handleEmail, value:Email},
      {id:2, title:'Mobile:', change:handlelMobile, value:Mobile},
      {id:3, title:'Review', change:handleReview, value:ReviewMessage}
    ]
  return (
    
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Complain' element={<Complaining setUser={setUser} setMobile={setMobile} setComplainMessage={setComplainMessage} setEmail={setEmail} complain={complain} ComplainMessage={ComplainMessage} Email={Email}  User={User}  Mobile={Mobile} />} />
        <Route path='/Review' element={<Review setUser={setUser} setMobile={setMobile} setReviewMessage={setReviewMessage} setEmail={setEmail} review={review} ReviewMessage={ReviewMessage} Email={Email} Mobile={Mobile}  User={User}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
