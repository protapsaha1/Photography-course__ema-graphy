import slider1 from '../../../../assets/images/slider1.jpg';
import slider2 from '../../../../assets/images/slider2.jpg';
import slider3 from '../../../../assets/images/slider3.jpg';
import slider4 from '../../../../assets/images/slider4.jpeg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full  h-[600px]">
                    <img src={slider1} className="w-full  h-[600px]  " />
                    <div className='hero-overlay bg-opacity-60 absolute top-0 w-full  h-[600px]'></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-28 top-36'>
                        <h1 className='text-white font-bold text-5xl my-3'>Kids Paradise</h1>
                        <p className='text-xl font-semibold'>Here is so new collection in kids cars, Truck,Cars, Police Cars, Sports cars. <br /> Visit our website and buy your favourite cars.</p>

                        <button className='btn btn-warning mt-20'>Buy Now</button>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full  h-[600px]">
                    <img src={slider2} className="w-full  h-[600px]" />
                    <div className='hero-overlay bg-opacity-60 absolute top-0 w-full  h-[600px]'></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-28 top-36'>
                        <h1 className='text-white font-bold text-5xl my-3'>Kids Paradise</h1>
                        <p className='text-xl font-semibold'>Here is so new collection in kids cars, Truck,Cars, Police Cars, Sports cars. <br /> Visit our website and buy your favourite cars.</p>

                        <button className='btn btn-warning mt-20'>Buy Now</button>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full  h-[600px]">
                    <img src={slider3} className="w-full  h-[600px]" />
                    <div className='hero-overlay bg-opacity-60 absolute top-0 w-full  h-[600px]'></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-28 top-36'>
                        <h1 className='text-white font-bold text-5xl my-3'>Kids Paradise</h1>
                        <p className='text-xl font-semibold'>Here is so new collection in kids cars, Truck,Cars, Police Cars, Sports cars. <br /> Visit our website and buy your favourite cars.</p>

                        <button className='btn btn-warning mt-20'>Buy Now</button>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full  h-[600px]">
                    <img src={slider4} className="w-full h-[600px]" />
                    <div className='hero-overlay bg-opacity-60 absolute top-0 w-full  h-[600px]'></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute left-28 top-36'>
                        <h1 className='text-white font-bold text-5xl my-3'>Kids Paradise</h1>
                        <p className='text-xl font-semibold'>Here is so new collection in kids cars, Truck,Cars, Police Cars, Sports cars. <br /> Visit our website and buy your favourite cars.</p>

                        <button className='btn btn-warning mt-20'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;