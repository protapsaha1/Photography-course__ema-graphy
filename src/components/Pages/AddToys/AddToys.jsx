
const AddToys = () => {

    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        // category first
        const catOneName = form.catOneName.value;
        const catOnePhoto = form.catOnePhoto.value;
        const catOnePrice = form.catOnePrice.value;
        const catOneRating = form.catOneRating.value;
        const catOneQuantity = form.catOneQuantity.value;
        const catOneDescription = form.catOneDescription.value;
        const catOneSellerName = form.catOneSellerName.value;

        // category second
        const catTwoName = form.catTwoName.value;
        const catTwoPhoto = form.catTwoPhoto.value;
        const catTwoPrice = form.catTwoPrice.value;
        const catTwoRating = form.catTwoRating.value;
        const catTwoQuantity = form.catTwoQuantity.value;
        const catTwoDescription = form.catTwoDescription.value;
        const catTwoSellerName = form.catTwoSellerName.value;

        // category three
        const catThreeName = form.catThreeName.value;
        const catThreePhoto = form.catThreePhoto.value;
        const catThreePrice = form.catThreePrice.value;
        const catThreeRating = form.catThreeRating.value;
        const catThreeQuantity = form.catThreeQuantity.value;
        const catThreeDescription = form.catThreeDescription.value;
        const catThreeSellerName = form.catThreeSellerName.value;

        const toyData = {
            ToyName: name,
            ToyPhoto: photo,
            ToyPrice: price,
            ToyRating: rating,
            ToyQuantity: quantity,
            ToyDetails: description,
            SellerName: sellerName,
            sellerEmail: sellerEmail,
            ToyCategories: [
                { category_id: 1, category_Name: catOneName, category_Photo: catOnePhoto, category_Price: catOnePrice, category_Rating: catOneRating, category_Quantity: catOneQuantity, category_Description: catOneDescription, category_SellerName: catOneSellerName },
                { category_id: 2, category_Name: catTwoName, category_Photo: catTwoPhoto, category_Price: catTwoPrice, category_Rating: catTwoRating, category_Quantity: catTwoQuantity, category_Description: catTwoDescription, category_SellerName: catTwoSellerName },
                { category_id: 3, category_Name: catThreeName, category_Photo: catThreePhoto, category_Price: catThreePrice, category_Rating: catThreeRating, category_Quantity: catThreeQuantity, category_Description: catThreeDescription, category_SellerName: catThreeSellerName }
            ]
        }

        console.log(toyData)
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
                            </div>
                            {/* third part */}
                            <div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Seller Name</span>
                                    </label>
                                    <br />
                                    <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                </div>
                                <div className="w-full mb-5">
                                    <label className="text-gray-700 text-lg font-bold font-sans">
                                        <span>Seller Email</span>
                                    </label>
                                    <br />
                                    <input type="email" name="email" placeholder="Enter Email" className="input input-bordered w-full " />
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
                        {/* sub catagories */}
                        <h1 className="text-center text-4xl font-bold font-serif text-black my-10">Sub Categories</h1>
                        <div>
                            {/* first category */}

                            <div>
                                <h1 className=" text-3xl font-bold font-serif text-black mb-5">First Category</h1>

                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catOneName" placeholder="Toy Name" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Toy Photo</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catOnePhoto" placeholder="Toy Photo" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Toy Price</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catOnePrice" placeholder="Toy Price" className="input input-bordered w-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Ratings</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catOneRating" placeholder="Toy Ratings" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Available Quantity</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catOneQuantity" placeholder="Quantity" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Seller Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catOneSellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <label className="text-gray-700 text-lg font-bold font-sans">
                                            <span>Details</span>
                                        </label>
                                        <br />
                                        <textarea type="text" name="catOneDescription" placeholder="Toy Descriptions" className="input input-bordered w-full h-60 text-xl " />
                                    </div>
                                </div>
                            </div>



                            {/* second category */}
                            <div>
                                <h1 className=" text-3xl font-bold font-serif text-black mb-5">Second Category</h1>

                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catTwoName" placeholder="Toy Name" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Toy Photo</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catTwoPhoto" placeholder="Toy Photo" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Toy Price</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catTwoPrice" placeholder="Toy Price" className="input input-bordered w-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Ratings</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catTwoRating" placeholder="Toy Ratings" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Available Quantity</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catTwoQuantity" placeholder="Quantity" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Seller Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catTwoSellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <label className="text-gray-700 text-lg font-bold font-sans">
                                            <span>Details</span>
                                        </label>
                                        <br />
                                        <textarea type="text" name="catTwoDescription" placeholder="Toy Descriptions" className="input input-bordered w-full h-60 text-xl " />
                                    </div>
                                </div>
                            </div>


                            {/* third category */}
                            <div>
                                <h1 className=" text-3xl font-bold font-serif text-black mb-5">Third Category</h1>

                                <div className="grid grid-cols-3 gap-6">
                                    <div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catThreeName" placeholder="Toy Name" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Toy Photo</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catThreePhoto" placeholder="Toy Photo" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Toy Price</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catThreePrice" placeholder="Toy Price" className="input input-bordered w-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Ratings</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catThreeRating" placeholder="Toy Ratings" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Available Quantity</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catThreeQuantity" placeholder="Quantity" className="input input-bordered w-full " />
                                        </div>
                                        <div className="w-full mb-5">
                                            <label className="text-gray-700 text-lg font-bold font-sans">
                                                <span>Seller Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="catThreeSellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <label className="text-gray-700 text-lg font-bold font-sans">
                                            <span>Details</span>
                                        </label>
                                        <br />
                                        <textarea type="text" name="catThreeDescription" placeholder="Toy Descriptions" className="input input-bordered w-full h-60 text-xl " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Add Toy" className="btn btn-active btn-accent w-full text-xl font-semibold font-serif mb-28 mt-10" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;