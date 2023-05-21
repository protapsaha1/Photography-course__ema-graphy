import Swal from "sweetalert2";
import { FaArrowRight, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ToysInMyToys = ({ toy, allToys, setAllToys }) => {

    const { _id, ToyName, ToyPhoto, ToyPrice, SellerName, SubCategory } = toy;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/allToys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json)
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = allToys.find(toy => toy._id === _id);
                            setAllToys(remaining)
                        }
                    })

            }
        })
    };



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full mb-3">
                <thead>
                    <tr>
                        <th className="font-bold text-xl font-serif">Car</th>
                        <th className="font-bold text-xl font-serif">Category</th>
                        {
                            SellerName &&
                            <th className="font-bold text-xl font-serif">Seller Name</th>
                        }
                        <th className="font-bold text-xl font-serif">View Details</th>
                        <th className="font-bold text-xl font-serif">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask  w-48 h-36 p-">
                                        <img src={ToyPhoto} className="w-48 h-36" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-2xl font-serif">{ToyName}</div>
                                    <div className="text-lg opacity-50 font-serif">Price: {ToyPrice}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="font-bold text-2xl font-serif">{SubCategory}</div>
                        </td>
                        {
                            SellerName &&
                            <td className="font-bold text-2xl font-serif"> {SellerName}</td>
                        }
                        <th>
                            {/* <PrivateRoute><Link></Link></PrivateRoute> */}
                            <Link to={`/toyDetails/${_id}`}><button className="btn btn-outline text-lg"><FaArrowRight className="mr-3" />View Details</button></Link>
                        </th>
                        <th>
                            <div className="flex flex-col ">
                                <button className="btn btn-square btn-outline mb-4" onClick={() => handleDelete(_id)}><FaTrashAlt className="w-6 h-6 " /></button>
                                <Link to={`/update/${_id}`}><button className="btn btn-square btn-outline"><FaEdit className="w-8 h-8" /></button></Link>
                            </div>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div >
    );
};

export default ToysInMyToys;