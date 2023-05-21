import useTitle from "../../CustomHook/useTitle";
import { FaArrowLeft } from "react-icons/fa";

const Blogs = () => {
    useTitle('blog');

    const handleBack = () => {
        window.history.back();
    };
    return (
        <div>
            <div className="mx-10 mt-5">
                <button className="btn btn-active btn-secondary" onClick={handleBack}><FaArrowLeft className="w-7 h-7" /></button>
            </div>
            <div className="mx-10 mt-16 mb-10 bg-slate-50 p-3 rounded-lg">
                <div className="text-black my-5">
                    <h1 className="font-bold text-3xl text-rose-600">What is an access token and refresh token?</h1>
                    <p className="text-lg font-semibold mt-3">A refresh token just helps you re-validate a user
                        without them having to re-enter their login credentials
                        multiple times. The access token is re-issued, provided
                        the refresh token is a valid one requesting permission to
                        access confidential resources
                    </p>
                    <h1 className="font-bold text-3xl text-rose-600">How do they work?</h1>
                    <p className="text-lg font-semibold mt-3">Its Users API Authentication and Authorization.</p>
                    <h1 className="font-bold text-3xl text-rose-600">where should we store access token on the client-side?</h1>
                    <p className="text-lg font-semibold mt-3">Access token should access on the web storage(local storage ,session storage)
                        but it is not proper and secure way,cookies(Session Cookies & Persistent Cookies) its better than local and session storage,
                        IndexedDb ,Cache API.File system storage.
                    </p>
                </div>
                <div className="text-black my-5">
                    <h1 className="font-bold text-3xl text-rose-600">Compare SQL and NoSQL databases?</h1>
                    <p className="text-lg font-semibold mt-3">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better
                        for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className="text-black my-5">
                    <h1 className="font-bold text-3xl text-rose-600">What is express js?</h1>
                    <p className="text-lg font-semibold mt-3">Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.
                        js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de
                        facto standard server framework for Node.js.
                    </p>
                    <h1 className="font-bold text-3xl text-rose-600">What is Nest JS ?</h1>
                    <p className="text-lg font-semibold mt-3">Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade
                        backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    </p>
                </div>
                <div className="text-black my-5">
                    <h1 className="font-bold text-3xl text-rose-600">What is MongoDB aggregate and how does it work ?</h1>
                    <p className="text-lg font-semibold mt-3"> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
                        The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;