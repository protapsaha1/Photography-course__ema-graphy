import { FaArrowRight } from "react-icons/fa";
// import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
// import PrivateRoute from '../../UserAccessOnly/PrivateRoute';

const Toy = ({ toy }) => {
    const { _id, ToyName, ToyPhoto, ToyPrice, SellerName, SubCategory } = toy;


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
                            {/* <Link></Link>  <PrivateRoute></PrivateRoute>*/}
                            <Link to={`/toyDetails/${_id}`}><button className="btn btn-outline text-lg"><FaArrowRight className="mr-3" />View Details</button></Link>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div >
    );
};

export default Toy;