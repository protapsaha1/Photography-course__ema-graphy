import bg1 from '../../../../assets/images/bg1.jpg';
import bg2 from '../../../../assets/images/bg2.jpeg';
import bg3 from '../../../../assets/images/bg3.jpg';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-4xl text-gray-400 font-bold font-serif text-center my-10'>Photo Gallery</h1>
            <div className='grid grid-cols-4 gap-3 '>
                <img className='w-80 h-60' src={bg1} alt="" />
                <img className='w-80 h-60' src={bg2} alt="" />
                <img className='w-80 h-60' src={bg3} alt="" />
                <img className='w-80 h-60' src={bg3} alt="" />
                <img className='w-80 h-60' src={bg1} alt="" />
                <img className='w-80 h-60' src={bg2} alt="" />
                <img className='w-80 h-60' src={bg3} alt="" />
                <img className='w-80 h-60' src={bg3} alt="" />
                <img className='w-80 h-60' src={bg1} alt="" />
                <img className='w-80 h-60' src={bg2} alt="" />
                <img className='w-80 h-60' src={bg3} alt="" />
                <img className='w-80 h-60' src={bg3} alt="" />
            </div>
        </div>
    );
};

export default Gallery;