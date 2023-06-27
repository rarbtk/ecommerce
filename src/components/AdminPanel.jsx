import { useAuth } from "../context/authContext";


export default function AdminPanel() {
const {user} = useAuth();


    return (
        <div>
            <h1>
                Panel de administrador
            </h1>
        </div>
    )
}
