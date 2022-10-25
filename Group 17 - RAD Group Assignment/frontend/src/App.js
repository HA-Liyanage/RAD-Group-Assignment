import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Topup from "./pages/Topup";
import AddTopup from "./pages/AddTopup";
import Dashboard from "./pages/Dashboard";
import SingleTopup from "./pages/SingleTopup";
import UpdateSingleTopup from "./pages/UpdateSingleTopup";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

//rankup pages
import Rankup from "./pages/Rankup";
import AddRankup from "./pages/AddRankup";
import SingleRankup from "./pages/SingleRankup";
import RankDashboard from "./pages/RankDashboard";
import UpdateSingleRankup from "./pages/UpdateSingleRankup";

//coaching pages
import Coaching from "./pages/Coaching";
import AddCoaching from "./pages/AddCoaching";
import SingleCoach from "./pages/SingleCoach";
import CoachingDashboard from "./pages/CoachingDashboard";
import UpdateSingleCoach from "./pages/UpdateSingleCoach";

//account pages
import Account from "./pages/Account";
import AddAccount from "./pages/AddAccount";
import AccountDashboard from "./pages/AccountDashboard";
import UpdateSingleAccount from "./pages/UpdateSingleAccount";

//report pages
import Report from "./pages/Report";
import AddReport from "./pages/AddReport";
import UpdateSingleReport from "./pages/UpdateSingleReport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/topups" element={<Topup />}></Route>
            <Route path="/topups/add" element={<AddTopup />}></Route>

            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/topups/:id" element={<SingleTopup />}></Route>
            <Route
              path="/dashboard/edit/:id"
              element={<UpdateSingleTopup />}
            ></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>

            <Route path="/rankups" element={<Rankup />}></Route>
            <Route path="/rankups/add" element={<AddRankup />}></Route>
            <Route path="/rankups/:id" element={<SingleRankup />}></Route>

            <Route path="/rankDashboard" element={<RankDashboard />}></Route>
            <Route
              path="/rankDashboard/edit/:id"
              element={<UpdateSingleRankup />}
            ></Route>

            <Route path="/coaching" element={<Coaching />}></Route>
            <Route path="/coaching/add" element={<AddCoaching />}></Route>
            <Route path="/coaching/:id" element={<SingleCoach />}></Route>
            <Route
              path="/coachDashboard"
              element={<CoachingDashboard />}
            ></Route>
            <Route
              path="/coachDashboard/edit/:id"
              element={<UpdateSingleCoach />}
            ></Route>

            <Route path="/accounts" element={<Account />}></Route>
            <Route path="/accounts/add" element={<AddAccount />}></Route>
            <Route
              path="/accountDashboard"
              element={<AccountDashboard />}
            ></Route>
            <Route
              path="/accountDashboard/edit/:id"
              element={<UpdateSingleAccount />}
            ></Route>

            <Route path="/reports" element={<Report />}></Route>
            <Route path="/reports/add" element={<AddReport />}></Route>
            <Route
              path="/reports/edit/:id"
              element={<UpdateSingleReport />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
