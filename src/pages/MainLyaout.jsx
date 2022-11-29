import { Outlet } from 'react-router-dom'
import Navbar from "../componets/Ui/navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout