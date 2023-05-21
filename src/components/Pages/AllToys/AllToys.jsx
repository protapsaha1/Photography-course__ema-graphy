import { useEffect, useContext, useState } from "react";
import Toy from "../Toy/Toy";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import useTitle from "../../CustomHook/useTitle";
import { UserProvider } from "../../Hook/ContextProvider/UserContext";

const AllToys = () => {
    useTitle('All Toys')
    const navigate = useNavigate();
    const { user } = useContext(UserProvider)
    const [allToys, setAllToys] = useState([]);
    const { totalToys } = useLoaderData();
    // const [spinner, setSpinner] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [productPerPage, setProductPerPage] = useState(20);


    const page = Math.ceil(totalToys / productPerPage);
    const totalPage = [...Array(page).keys()];

    const options = [5, 10, 15, 20, 25, 30];
    const userEmail = user?.email;
    // console.log(userEmail)

    useEffect(() => {
        fetch(`https://kids-toys-websites-server-protapsaha1.vercel.app/allToys?page=${currentPage}&limit=${productPerPage}&email=${userEmail}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('kids-paradise-access')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setAllToys(data)
                }
                else {
                    navigate('/')
                }
            })



    }, [currentPage, productPerPage, navigate, userEmail]);

    const handlePagination = presentPage => {
        setCurrentPage(presentPage)
    };

    const handleProductPerPage = event => {
        setProductPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    };


    const handlePreviousPage = startIndex => {
        if (currentPage > 1) {
            setCurrentPage(startIndex - 1)
        }
    }
    const handleNextPage = endIndex => {
        if (currentPage < 1) {
            setCurrentPage(endIndex + 1)
        }
    }

    return (
        <div className="bg-slate-50">
            {/* <h1>my toy : {allToys.length}</h1> */}
            <div className="mx-10 py-10">

                {/* {setSpinner(false)} */}
                {
                    allToys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    ></Toy>)
                }
            </div>
            <div className="justify-center py-5 flex items-center">
                <button className="btn btn-square border-0 text-white mr-5" onClick={handlePreviousPage}><FaAngleLeft className="w-6 h-6" /></button>
                <span>
                    {
                        totalPage.map(number => <button
                            key={number + 1}
                            onClick={() => handlePagination(number)}
                            className={`${currentPage === number ? "btn bg-orange-500 btn-square border-0 text-white text-lg mr-3" : "btn btn-square border-0 text-white text-lg mr-3"}`}
                        >
                            {number + 1}
                        </button>)
                    }
                </span>
                <select value={productPerPage} onChange={handleProductPerPage} className="btn btn-square border-0 text-white text-lg">
                    {
                        options.map(option => <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>)
                    }
                </select>
                <button className="btn btn-square border-0 text-white ms-2" onClick={handleNextPage}><FaAngleRight className="w-6 h-6" /></button>
            </div>
        </div>
    );
};

export default AllToys;