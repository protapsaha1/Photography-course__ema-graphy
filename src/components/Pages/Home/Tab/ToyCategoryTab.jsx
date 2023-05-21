// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// const ToyCategoryTab = ({ toySubCategory }) => {
//     console.log(toySubCategory)
//     const { category_Name, category_Photo, category_Price, category_Rating, category_SellerName, category_Quantity } = toySubCategory;
//     return (
//         <Tabs>
//             <TabList>
//                 <div className="tabs">
//                     <a className="tab tab-bordered tab-active"><Tab>{category_Name}</Tab></a>
//                 </div>
//             </TabList>

//             <TabPanel>
//                 <div className="card w-96 h-full bg-base-100 shadow-2xl">
//                     <figure><img src={category_Photo} alt="Shoes" /></figure>
//                     <div className="p-3">
//                         <h2 className="card-title">
//                             {category_Name}
//                         </h2>
//                         <p>{category_Price}</p>
//                         <div className="flex justify-between items-center">
//                             <h1>Seller Name : {category_SellerName}</h1>
//                             <div className="flex justify-end items-center my-4">
//                                 <p className="mr-3">Raring : {category_Rating}</p>
//                                 <p className="">Quantity : {category_Quantity}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </TabPanel>
//         </Tabs>

//     );
// };

// export default ToyCategoryTab;