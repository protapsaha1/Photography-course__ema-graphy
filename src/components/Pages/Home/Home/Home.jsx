import slider1 from '../../../../assets/images/cars1.jpg';
import slider2 from '../../../../assets/images/cars1.jpg';
import slider3 from '../../../../assets/images/cars1.jpg';


const Home = () => {
    return (
        <div>
            {/* slider */}
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full  h-[350]">
                        <img src={slider1} className="w-full  h-[350]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full  h-[350]">
                        <img src={slider2} className="w-full  h-[350]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full  h-[350]">
                        <img src={slider3} className="w-full  h-[350]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full  h-[350]">
                        <img src={slider2} className="w-full h-[350]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;