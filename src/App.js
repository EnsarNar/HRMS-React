import './App.css';
import 'semantic-ui-css/semantic.min.css';
import EmployerDashboard from "../src/components/Dashboard/EmployerDashboard"
import CandidateDashboard from "../src/components/Dashboard/CandidateDashboard"
import AdminDashboard from "../src/components/Dashboard/AdminDashboard"

import { Route } from "react-router-dom"
function App() {


  return (
    <div className="App">

      {/* {window.location.pathname.includes("employer") && <EmployerDashboard />}  */}
      <Route path="/employer" component={EmployerDashboard} />
      <Route path="/candidate" component={CandidateDashboard} />
      <Route path="/admin" component={AdminDashboard} />
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
