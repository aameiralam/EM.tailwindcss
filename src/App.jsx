import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./Components/AddEmployee";
import Header from './Components/Header'; 
import EmployeeList from "./Components/EmployeeList";
import UpdateEmployee from "./Components/UpdateEmployee";
import Footer from "./Components/Footer"

function App() {
 

  return (
   <>
 
      
      <Header/>

      <Routes>
      <Route index element={<EmployeeList/>}/>
      <Route path="/" element={<EmployeeList/>}/>
      <Route path="/employeeList" element={<EmployeeList/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
        
      </Routes>

      <Footer/>
 
      

     
    </>
  )
}

export default App
