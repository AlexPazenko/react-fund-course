import MyInput from "../componets/Ui/input/MyInput";
import MyButton from "../componets/Ui/button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../context";


const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter the login please"/>
                <MyInput type="password" placeholder="Enter the password please"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;