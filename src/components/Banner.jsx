
import { Link } from 'react-router-dom'
import first from '../assets/images/icons/1.png'
import second from '../assets/images/icons/2.png'
import third from '../assets/images/icons/3.png'
import fourth from '../assets/images/icons/4.png'

const Banner = () => {
    return (
        <div >
            <div className='bg-stone-300 bg-no-repeat flex items-center justify-center bg-center bg-cover  md:h-[600px] py-10'>
            <div className='w-1/2'>
                <h3 className='md:text-3xl text-white'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='text-black'>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link  className='btn-md md:btn bg-[#E3B577] md:bg-[#E3B577]'>Learn More</Link>
            </div>
            <div></div>
        </div>
            <div className='py-14 bg-[#ECEAE3]'>
                <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0'>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={first} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={second} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={third} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='w-11/12 mx-auto flex flex-col items-center md:items-start text-center md:text-left'>
                        <div className='mb-4'>
                            <img src={fourth} alt="" />
                        </div>
                        <h2 className='font-rancho text-4xl mb-2'>Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;