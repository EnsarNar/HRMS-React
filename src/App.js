import './App.css';
import 'semantic-ui-css/semantic.min.css';
import EmployerDashboard from "../src/components/Dashboard/EmployerDashboard"
import CandidateDashboard from "../src/components/Dashboard/CandidateDashboard"
import AdminDashboard from "../src/components/Dashboard/AdminDashboard"
import HomePage from './pages/HomePage';
import { Route } from "react-router-dom"
import AccordionTest from './pages/AccordionTest';



function App() {
  return (
    <div className="App">
      {/* {window.location.pathname.includes("employer") && <EmployerDashboard />}  */}
      <Route path="/employer" component={EmployerDashboard} />
      <Route path="/candidate" component={CandidateDashboard} />
      <Route path="/admin" component={AdminDashboard} />
      {/* <Route exact path="/home" component={HomePage} /> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/accordion" component={AccordionTest} />




      {/* {window.location.pathname.includes("candidate") && <CandidateDashboard />} */}



      {/* <Route path="/auth" exact component={Auth} />
      <Container>
        < Route path="/admin" exact component={AdminDashboard} />
      </Container> */}
      {/* <EmployerDashboard />
       <Container>
         <JobAdvertisement />
       </Container> */}
    </div>
  );
}



export default App;
