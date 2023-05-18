
const AddToys = () => {
    return (
        <div className="bg-slate-400">
            <div className="max-w-screen-xl mx-auto">
                {/* description of adding toys */}
                <div>
                    <p className="text-center text-gray-700 text-lg font-bold font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam?</p>
                </div>
                {/* add toys form */}
                <div className="mt-28">
                    <form>
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
                                                <span>Seller Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <label className="text-gray-700 text-lg font-bold font-sans">
                                            <span>Details</span>
                                        </label>
                                        <br />
                                        <textarea type="text" name="description" placeholder="Toy Descriptions" className="input input-bordered w-full h-60 text-xl " />
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
                                                <span>Seller Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <label className="text-gray-700 text-lg font-bold font-sans">
                                            <span>Details</span>
                                        </label>
                                        <br />
                                        <textarea type="text" name="description" placeholder="Toy Descriptions" className="input input-bordered w-full h-60 text-xl " />
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
                                                <span>Seller Name</span>
                                            </label>
                                            <br />
                                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full " />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <label className="text-gray-700 text-lg font-bold font-sans">
                                            <span>Details</span>
                                        </label>
                                        <br />
                                        <textarea type="text" name="description" placeholder="Toy Descriptions" className="input input-bordered w-full h-60 text-xl " />
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