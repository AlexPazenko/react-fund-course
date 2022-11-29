import './styles/App.css'
import AppRouter from "./componets/Ui/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])
  return (
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
              <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
