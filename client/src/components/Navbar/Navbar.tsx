import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <nav className='nav__container'>

            <div className="logo">
                <h1>Flash Code Editor</h1>
            </div>

            <div className="menu__items">
                <li>Setting</li>
                <Link to={"/login"} >
                <button>Login</button>
                </Link>
            </div>




        </nav>
    )
}

export default Navbar