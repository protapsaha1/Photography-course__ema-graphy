import { useContext } from "react";
import { UserProvider } from "../../Hook/ContextProvider/UserContext";
import Swal from "sweetalert2";
import useTitle from "../../CustomHook/useTitle";

const AddToys = () => {
    useTitle('Add Toy')
    const { user } = useContext(UserProvider);
    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const category = form.category.value;


        const toyData = {
            ToyName: name,
            ToyPhoto: photo,
            ToyPrice: price,
            ToyRating: rating,
            ToyQuantity: quantity,
            ToyDetails: description,
            SellerName: sellerName,
            sellerEmail: sellerEmail,
            SubCategory: category
        }

        // console.log(toyData)
        fetch('https://kids-toys-websites-server.vercel.app/allToys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Successfully Add Toy',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        form.reset();
    }

    return (
        <div className="bg-slate-400">
            <div className="max-w-screen-xl mx-auto">
                {/* description of adding toys */}
                <div>
                    <p className="text-center text-gray-700 text-3xl  font-bold font-serif py-10">Hey my dear seller, Your selling products add in this form and show your <br /> products in our webpage.</p>
                </div>
                {/* add toys form */}
                <div className="mt-28">
                    <form onSubmit={handleAddToys}>
                        <div className="grid grid-cols-3 gap-6">
                            {/* 1st part */}
                            <div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Name</span>
                                    </label>
                                    <br />
                                    <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full " />
                                </div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Toy Photo</span>
                                    </label>
                                    <br />
                                    <input type="text" name="photo" placeholder="Toy Photo" className="input input-bordered w-full " />
                                </div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Toy Price</span>
                                    </label>
                                    <br />
                                    <input type="text" name="price" placeholder="Toy Price" className="input input-bordered w-full" />
                                </div>
                            </div>
                            {/* second part */}
                            <div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Ratings</span>
                                    </label>
                                    <br />
                                    <input type="text" name="rating" placeholder="Toy Ratings" className="input input-bordered w-full " />
                                </div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Available Quantity</span>
                                    </label>
                                    <br />
                                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full " />
                                </div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Sub Category</span>
                                    </label>
                                    <br />
                                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                                </div>
                            </div>
                            {/* third part */}
                            <div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Seller Name</span>
                                    </label>
                                    <br />
                                    <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered w-full " />
                                </div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Seller Email</span>
                                    </label>
                                    <br />
                                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full " />
                                </div>
                            </div>
                            <div className="w-full mb-5">
                                <label className="text-gray-700 text-lg font-bold font-sans">
                                    <span>Details</span>
                                </label>
                                <br />
                                <textarea type="text" name="description" placeholder="Toy Descriptions" className="input input-bordered w-[1280px] h-60 text-xl " />
                            </div>
                        </div>
                        <input type="submit" value="Add Toy" className="btn btn-active btn-accent w-full text-xl font-semibold font-serif mb-28 mt-10" />
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddToys;