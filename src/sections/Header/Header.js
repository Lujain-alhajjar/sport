import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../imges/logo.jfif'
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand logo" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse links" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link aria-current="page" to="/exercises">Exercises</Link>
                </li>
                <li className="nav-item">
                <Link aria-current="page" to="/measurements">BMI</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header