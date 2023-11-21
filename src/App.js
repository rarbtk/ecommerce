import Header from "./components/header.jsx";
import HeaderOnlineStore from "./components/HeaderOnlineStore.jsx";
import Home from "./components/Home.jsx";

import AdminPanel from "./components/AdminPanel.jsx";
import CreateUser from "./components/CreateUser.jsx";
import Login from "./components/Login.jsx";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";

export default function App() {
  return (
<AuthProvider>
 <Router>
   
   <Routes >
   <Route path="/" Component={Home}/>
   <Route path="/admin" Component={AdminPanel} />
   <Route path="/newUser" Component={CreateUser} />
   <Route path="/login" Component={Login} />

   </Routes >
   </Router>
    </AuthProvider>
   

  );
}


