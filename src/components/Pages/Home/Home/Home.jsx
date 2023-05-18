import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
// import ShopCategoryTab from '../Tab/ShopCategoryTab';


const Home = () => {
    return (
        <div className='bg-slate-50 h-full'>
            {/* slider */}
            <div className="lg:max-w-screen-xl lg:mx-auto mb-10">
                <Banner></Banner>
            </div>

            {/* gallery */}
            <div className='mx-auto max-w-screen-xl my-10'>
                <Gallery></Gallery>
            </div>

            {/* shop category */}
            <div>
                {/* <ShopCategoryTab></ShopCategoryTab> */} 
                {/* not done tab*/}
            </div>
        </div>
    );
};

export default Home;