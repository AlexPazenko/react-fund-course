import MainLayout from "../../pages/MainLyaout";
import {Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import NotFound from "../../pages/NotFound";
import PostIdPage from "../../pages/PostIdPage";
import Login from "../../pages/Login";


const AppRouter = () => {
    /*const privateRoutes = useRoutes([
        { path: "/", element: <MainLayout />,
            children: [
                { path: "/", element: <Home />},
                { path: "about", element: <About /> },
                { path: "posts", element: <Posts /> },
                { path: "posts/:id", element: <PostIdPage /> },
                { path: "*", element: <NotFound /> },
            ]
        },

    ]);

    const publicRoutes = useRoutes([
        { path: "/", element: <MainLayout />,
            children: [
                { path: "login", element: <Login /> },
            ]
        },

    ]);
    return  isAuth ? privateRoutes : publicRoutes*/
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />}/>
                <Route path="about" element={<About />}/>
                <Route path="posts" element={<Posts/>}/>
                <Route path="posts/:id" element={<PostIdPage />}/>
                <Route path="login" element={<Login />}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;