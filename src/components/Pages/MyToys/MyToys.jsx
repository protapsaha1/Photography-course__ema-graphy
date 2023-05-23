import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ToysInMyToys from "./ToysInMyToys";
import useTitle from "../../CustomHook/useTitle";
// import { UserProvider } from "../../Hook/ContextProvider/UserContext";


const MyToys = () => {
    useTitle('My Toys');
    // const navigate = useNavigate();
    // const { user } = useContext(UserProvider);
    // const toys = useLoaderData();
    const [allToys, setAllToys] = useState([]);
    const refSearch = useRef(null);
    const [search, setSearch] = useState('');
    // const email = user?.email;
    // useEffect(() => {
    fetch(`https://kids-toys-websites-server.vercel.app/allToys?search=${search}`, {
        //         method: "GET",
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('kids-paradise-access')}`
        //         }
        //     })
    }, [search])
        .then(res => res.json())
        .then(data => {
            //         if (!data.error) {
            setAllToys(data)
            //         }
            //         else {
            //             navigate('/')
            //         }
        })
    const handleSearch = () => {
        // const searchByName = refSearch.current.value;
        setSearch(refSearch.current.value)
        console.log(refSearch.current.value)
    }
    return (
        <div className="bg-white py-10 px-10">
            <div className="flex justify-center items-center">
                {/* search toys */}
                <div className="mr-10">
                    <div className="input-group">
                        <input type="search" ref={refSearch} name="" placeholder="Search…" className="input input-bordered text-white" />
                        <button className="btn btn-square" onClick={handleSearch}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <select className="bg-pink-600 border rounded p-3 font-bold text-white text-lg">
                    <option className="text-lg p-2 font-bold">
                        Sort low Price
                    </option>
                    <option className="text-lg p-2 font-bold">
                        Sort High Price
                    </option>
                </select>
            </div>
            <div>
                {
                    allToys.map(toy => <ToysInMyToys
                        key={toy._id}
                        toy={toy}
                        allToys={allToys}
                        setAllToys={setAllToys}
                    ></ToysInMyToys>)
                }

            </div>
        </div>
    );
};

export default MyToys;