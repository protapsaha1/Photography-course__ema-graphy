import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysInMyToys from "./ToysInMyToys";
import useTitle from "../../CustomHook/useTitle";


const MyToys = () => {
    useTitle('My Toys')
    const toys = useLoaderData();
    const [allToys, setAllToys] = useState(toys);

    return (
        <div className="bg-white py-10 px-10">
            {
                allToys.map(toy => <ToysInMyToys
                    key={toy._id}
                    toy={toy}
                    allToys={allToys}
                    setAllToys={setAllToys}
                ></ToysInMyToys>)
            }
        </div>
    );
};

export default MyToys;