import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { useContext } from "react";
import { UserProvider } from "../../Hook/ContextProvider/UserContext";

const Navbar = () => {
    const { user, logOut } = useContext(UserProvider);

    // useEffect(() => {
    //     fetch(`https://kids-toys-websites-server.vercel.app/allToys?search=${search}`) useEffect,
    //         .then(res => res.json)
    //         .then(data => {
    //             console.log('is data found', data)
    //         })

    // }, [search])


    const routeLinks = <>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/">Home</ActiveLink></li>
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/allToys">All Toys</ActiveLink></li>
        {
            user &&
            <>
                <li className="mx-3 hover:text-rose-600"><ActiveLink to="/myToys">My Toys</ActiveLink></li>
                <li className="mx-3 hover:text-rose-600"><ActiveLink to="/addToys">Add Toys</ActiveLink></li>
            </>
        }
        <li className="mx-3 hover:text-rose-600"><ActiveLink to="/blogs">Blog</ActiveLink></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        // full width navbar
        <div className="bg-white h-20 shadow-2xl">
            {/* fixed width middle nav */}
            <div className="lg:max-w-screen-xl lg:mx-auto flex justify-between items-center py-4">
                {/* website name */}
                <div>
                    <Link to="/"><h1 className="text-pink-500 text-3xl font-bold font-serif">Kids Paradise</h1></Link>
                </div>
                {/* routes */}
                <div className="">

                    <nav className=""> {/*sm:hidden*/}
                        <ul className="flex items-center text-xl text-orange-400 font-semibold ">
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
                {user ?
                    <div className="flex items-center">
                        <Link to="profile">
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full" >
                                    <img className="w-14 h-14" src={user?.photoURL} alt="" />
                                </div>
                            </div>
                        </Link>
                        <button className="btn ms-3" onClick={handleSignOut}>LogOut</button>
                    </div>

                    :
                    <div className="flex items-center">
                        <Link to="/login"><button className="btn btn-outline btn-error mr-3">Login</button></Link>
                        <Link to="/signUp"><button className="btn btn-outline btn-error">Sign Up</button></Link>
                    </div>
                }
            </div>
        </div >
    );
};

export default Navbar;