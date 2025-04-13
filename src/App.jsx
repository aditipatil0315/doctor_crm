import { useState } from 'react'
import './App.css'
import Cards_dashboard from './components/Dashboard_comp/Cards_dashboard/Cards_dashboard'
import Cards_appointment from './components/Appointment_comp/Cards_appointment/Cards_appointment';


const data = [
  { title: "Users", value: 1240 },
  { title: "Sales", value: 87 },
  { title: "Revenue", value: "$12.4K" },
];

const data_appointment = [
  { title: "Total Appointments", value: 1240 },
  { title: "Today's Appointments", value: 87 },
  { title: "Summary", value: "$12.4K" },
];




function App() {

  return (
   <div className="main_app">
    <div className="navbar">
      navbar
    </div>

    <div className="content_panel">
      hellowww
      <Cards_dashboard data={data}/>
      <Cards_appointment data={data_appointment}/>
    </div>
   </div>
  )
}

export default App
