import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) =>

                isActive
                    ?
                    "border-b-4 border-rose-500 "
                    :
                    ""

            }>

                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;