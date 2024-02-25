import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img src='Logo.png' alt='Not Aval' style={{width:"50px",height:"50px"}}/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ms-3">
                <Link to="" class="nav-link active">Home</Link>
                </li>
                <li className="nav-item ms-3">
                <Link to="/about" class="nav-link">About</Link>
                </li>
                <li className="nav-item ms-3">
                <Link to="/contact" class="nav-link">Contact</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                <Link to="/login" class="nav-link">Login</Link>
                </li>
                <li className="nav-item me-3">
                <Link to="/mycart" class="nav-link">MyCart</Link>
                </li>
            </ul>
            </div>
            
        </div>
        </nav>
        </>
    );
}