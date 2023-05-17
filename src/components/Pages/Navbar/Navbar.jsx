import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {
    const routeLinks = <>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/">Home</ActiveLink></li>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/all-toys">All Toys</ActiveLink></li>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/my-toys">My Toys</ActiveLink></li>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/add-toys">Add Toys</ActiveLink></li>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/blogs">Blog</ActiveLink></li>
    </>

    return (
        // full width navbar
        <div className="bg-white h-16">
            {/* fixed width middle nav */}
            <div className="lg:max-w-screen-xl lg:mx-auto flex justify-between items-center py-2">
                {/* website name */}
                <div>
                    <Link to="fkdkf"><h1 className="text-pink-500 text-3xl font-bold font-serif">Kids Paradise</h1></Link>
                </div>
                {/* routes */}
                <div className="flex items-center">
                    {/* search toys */}
                    <div className="mr-10">
                        <div className="input-group">
                            <input type="search" name="" placeholder="Search…" className="input input-bordered text-white" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
                                        strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav className=""> {/*sm:hidden*/}
                        <ul className="flex text-xl text-orange-400 font-semibold ">
                            {routeLinks}
                        </ul>
                    </nav>
                    {/* <nav className="lg:invisible">
                        <ul className="text-xl text-orange-400 font-semibold ">
                            {routeLinks}
                        </ul>
                    </nav> */}
                </div>
                {/* profile, login and sign up */}
                <div className="flex items-center">
                    <Link to="/login"><button className="btn btn-outline btn-error mr-3">Login</button></Link>
                    <Link to="/sign-up"><button className="btn btn-outline btn-error">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;