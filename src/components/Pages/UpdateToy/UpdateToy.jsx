import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import useTitle from "../../CustomHook/useTitle";

const UpdateToy = () => {
    useTitle('Update Toys')
    const toy = useLoaderData();
    console.log(toy)
    const { _id, ToyPrice, ToyName, ToyQuantity, ToyDetails } = toy;


    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(price, quantity, description)
        const updatedToy = { ToyPrice: price, ToyQuantity: quantity, ToyDetails: description };

        fetch(`https://kids-toys-websites-server-protapsaha1.vercel.app/allToys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Successfully Updated Toy',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset();
            })
            .catch(error => console.log(error.message))
    };


    const handleBack = () => {
        window.history.back();
    };


    return (
        <div className="bg-slate-400">
            <div className="mx-10 py-10">
                <button className="btn btn-active btn-secondary" onClick={handleBack}><FaArrowLeft className="w-7 h-7" /></button>
            </div>
            <div className="max-w-screen-xl mx-auto">
                {/* description of adding toys */}
                <div>
                    <p className="text-center text-gray-700 text-3xl  font-bold font-serif py-10">Update Toy Car :  {ToyName}</p>
                </div>
                {/* add toys form */}
                <div className="mt-28">
                    <form onSubmit={handleUpdateToy}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Toy Price</span>
                                    </label>
                                    <br />
                                    <input type="text" name="price" defaultValue={ToyPrice} placeholder="Toy Price" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="w-full mb-5">
                                <label className="text-gray-700 text-lg font-bold font-sans">
                                    <span>Available Quantity</span>
                                </label>
                                <br />
                                <input type="text" name="quantity" placeholder="Quantity" defaultValue={ToyQuantity} className="input input-bordered w-full " />
                            </div>

                            <div className="w-full mb-5">
                                <label className="text-gray-700 text-lg font-bold font-sans">
                                    <span>Details</span>
                                </label>
                                <br />
                                <textarea type="text" name="description" placeholder="Toy Descriptions" defaultValue={ToyDetails} className="input input-bordered w-[1280px] h-60 text-xl " />
                            </div>
                        </div>
                        <input type="submit" value="Add Toy" className="btn btn-active btn-accent w-full text-xl font-semibold font-serif mb-28 mt-10" />
                    </form>
                </div>
            </div >
        </div >
    );
};

export default UpdateToy;