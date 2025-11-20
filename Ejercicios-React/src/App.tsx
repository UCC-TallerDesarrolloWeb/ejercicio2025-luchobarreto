import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@pages/Login";

import "../styles.css";
import AuthorizedLayout from "@layouts/AuthorizedLayout.tsx";
import Activities from "@pages/Activities.tsx";
import Home from "@pages/Home.tsx";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<Login setIsLoggedIn={setIsLoggedIn} />}  />
                <Route path={"/"} element={<AuthorizedLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
                    <Route path={"/activities"} element={<Activities isLoggedIn={isLoggedIn} />}/>
                    <Route path={"/home"} element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;