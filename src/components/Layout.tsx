import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Layout: FC = () => {

    return (
        <>
            <div>
                <NavLink to='/' >
                    Home page
                </NavLink>
                <NavLink to='/users' >
                    Users page
                </NavLink>
                <NavLink to='/todos' >
                    Todo page
                </NavLink>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;