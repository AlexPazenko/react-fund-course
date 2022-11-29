import classes from './Navbar.module.css'
import { NavLink, useNavigate} from 'react-router-dom'
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        navigate('login')
    }
    return (
        <div className={classes.myNavbar__wrapper}>
            {isAuth &&
                <MyButton onClick={logout}>Log out</MyButton>
            }
            <nav className={classes.myNavbar}>
                <NavLink className={classes.myNavbar__items} to=".">Home</NavLink>
                <NavLink className={classes.myNavbar__items} to="about">About site</NavLink>
                <NavLink className={classes.myNavbar__items} to="posts">Posts</NavLink>
                <NavLink className={classes.myNavbar__items} to="login">Login</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;