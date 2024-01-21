import { useState } from "react";
import { LOGO_URL } from "./Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

export default function Header() {
    const [login, setLogin] = useState('Login')
    const onlineStatus = useOnlineStatus()
    return (
        <div className="header">
            <img className='logo' src={LOGO_URL}></img>

            <ul>
                <li>
                    Online Status :{onlineStatus ? '🟢' : '🔴'}
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>Cart</li>
                <button
                    className="login-btn"
                    onClick={() => {
                        login === 'Login' ? setLogin('Logout') : setLogin('Login')
                    }}
                >{login}</button>
            </ul>

        </div>
    )
}