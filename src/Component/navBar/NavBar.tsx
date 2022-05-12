import { Routing } from "../../App";
import { Link } from 'react-router-dom';
import './navBar.scss'

export const Navbar: React.FC = () =>{
    return(<div className="navbar">
        <ul>
            <li>
                <Link to= {Routing.PasswordPage}> Password RegExp</Link>
            </li>
            <li>
                <Link to ={Routing.UrlPage}> Url Parer</Link>
            </li>
        </ul>
    </div>)
}