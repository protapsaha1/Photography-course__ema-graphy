import error from '../../../assets/images/404-error-page-svg-animation.gif';
const ErrorPage = () => {
    const handleBack = () => {
        window.history.back();
    };
    return (
        <div>
            <img className='mx-auto mt-20' src={error} alt="" />
            <button className="btn btn-active btn-accent my-20 ms-96" onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;