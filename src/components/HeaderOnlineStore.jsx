import "../public/HeaderOnlineStore.css"
import onlineStore from "../public/logoOnlineStore.png"
import { AiOutlineMail,AiOutlineShoppingCart } from 'react-icons/ai';
//import { AiOutlineMail } from 'react-icons/ai';

export default () => {
    return (
        <header className="headerBar">
            <div className="onlineStore">
           <img src={onlineStore}></img>
            </div>
            
            <div className="container">
            
            <div className="searchIco">
            <input type="text" placeholder="Search.." />
            <div className="icons">
            < AiOutlineMail/>
            < AiOutlineShoppingCart/>

            </div>
           
            </div>   



            <div className="categories">
            <ul>
            <a><li> Cocción</li></a>  
            <a><li>Climatización</li></a>
            <a><li>Refrigeración</li></a>
            <a><li>Lavado</li></a>
            <a><li>Pequeños electrodomesticos</li> </a>
            <a><li>Televisores</li></a>
            </ul>
            </div>     
            
            
            </div>
        </header>
    )
}