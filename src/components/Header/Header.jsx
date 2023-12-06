import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </header>
            <main>
                <Suspense fallback={<div>loading ...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Header;