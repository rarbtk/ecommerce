import "../public/styles/HeaderOnlineStore.css"
//import onlineStore from "../public/logoOnlineStore.png"
//import { AiOutlineMail,AiOutlineShoppingCart } from 'react-icons/ai';
import HeaderOnlineStore from './HeaderOnlineStore';
import { useAuth } from '../context/authContext';
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    const {user} = useAuth();

    const [userEmail, setUserEmail] = useState(" ");

    const handleLogOut = async() =>{
        await logOut();
        navigate("login");
       
    }

useEffect(()=>{
    const user = auth.currentUser;

    if (user !== null) {
        const email = user.email;
        setUserEmail(email)
    }else{
        setUserEmail(" ");
    }
},[])


return (
    <div>
    <HeaderOnlineStore/>
    <h1>Bienvenido {userEmail}</h1>
    <button onClick={handleLogOut}>Sign Out</button>


    </div>
)




}