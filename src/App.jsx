import './App.css'
import { CssBaseline, Container } from "@mui/material";



// BOTH CARDS APPOINTMENT AND DASHBOARD
// import Cards_dashboard from './components/Dashboard_comp/Cards_dashboard/Cards_dashboard'
// import Cards_appointment from './components/Appointment_comp/Cards_appointment/Cards_appointment';


// const data = [
//   { title: "Users", value: 1240 },
//   { title: "Sales", value: 87 },
//   { title: "Revenue", value: "$12.4K" },
// ];

// const data_appointment = [
//   { title: "Total Appointments", value: 1240 },
//   { title: "Today's Appointments", value: 87 },
//   { title: "Summary", value: "$12.4K" },
// ];



// PIE CHART
// import Pie_chart from './components/Dashboard_comp/Pie_chart/Pie_chart';

//GENDER CHART
import Gender_chart from './components/Dashboard_comp/Gender_Chart/Gender_Chart';






function App() {

  return (
   <div className="main_app">
    <div className="navbar">
      navbar
    </div>

    <div className="content_panel">
      hellowww

      {/* CARDS */}
      {/* <Cards_dashboard data={data}/>
      <Cards_appointment data={data_appointment}/> */}


        {/* PIE CHART */}
      {/* <CssBaseline />
      <Container maxWidth="sm">
        <Pie_chart/>
      </Container> */}


      {/* GENDER ANALYTICS */}
      <CssBaseline />
      <Container maxWidth="sm">
        <Gender_chart />
      </Container>



    </div>
   </div>
  )
}

export default App
