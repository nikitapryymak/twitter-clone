import { useHistory } from "react-router";
import { auth } from "../firebase";



export default function Logout() {
    
    const history = useHistory();
    function handleClick() {
        auth.signOut();
        history.push('/login')
    }
    return (
        <i onClick={handleClick} className="fas fa-sign-out-alt"></i>
    )
}