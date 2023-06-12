import Header from "./components/header.jsx";
import HeaderOnlineStore from "./components/HeaderOnlineStore.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Login from "./components/Login.jsx";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


export default function App() {
  return (
    <Router>
   
      <Routes >
      <Route path="/" Component={HeaderOnlineStore}/>
      <Route path="/admin" Component={AdminPanel} />
      <Route path="/login" Component={Login} />
      <Route path="/create-acount" Component={AdminPanel} />
      </Routes >
    </Router>

  );
}


