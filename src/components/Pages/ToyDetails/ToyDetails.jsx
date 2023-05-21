import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHook/useTitle";
// import ToyCategory from "./ToyCategory";

const ToyDetails = () => {
    useTitle('Toy Details')
    const toysDetails = useLoaderData();
    console.log(toysDetails)
    const { ToyName, ToyPhoto, ToyPrice, SellerName, ToyDetails, ToyRating, ToyQuantity, sellerEmail } = toysDetails;
    const handleBack = () => {
        window.history.back()
    };

    return (
        <div>
            <div className="mx-10 my-10">
                <button className="btn btn-active btn-secondary" onClick={handleBack}><FaArrowLeft className="w-7 h-7" /></button>
            </div>
            <div className="my-10 mx-20">
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className=" h-full">
                        <figure><img className="w-full h-96" src={ToyPhoto} alt="Movie" /></figure>
                    </div>
                    <div className="card-body">
                        <div className="grid grid-cols-2 items-center">
                            <h2 className="card-title text-4xl">{ToyName}</h2>
                            <p className="ml-60 font-bold">Rating : {ToyRating} / ( {ToyRating} )</p>
                        </div>
                        <p className="mt-4 font-bold text-white">{ToyDetails}</p>
                        <div className="grid grid-cols-2 items-center">
                            <div className="text-lg font-bold">
                                {SellerName && <h1>Seller Name : {SellerName}</h1>}
                                <h1 className="flex flex-nowrap ">Seller Email : {sellerEmail}</h1>
                            </div >
                            <div className="flex justify-evenly items-center">
                                <p className="ml-10 font-bold">Price : {ToyPrice} </p>
                                <p className="ml-10 font-bold">Quantity : {ToyQuantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="grid grid-cols-3 gap-3  mx-32 my-10">, ToySubCategories
                {
                    ToySubCategories.map(category => <ToyCategory
                        key={category.category_id}
                        category={category}
                    ></ToyCategory>)
                }
            </div> */}
        </div >
    );
};

export default ToyDetails;