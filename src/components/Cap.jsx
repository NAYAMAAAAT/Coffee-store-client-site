
import firstcap from '../assets/images/cups/Rectangle 9.png'
import secondcap from '../assets/images/cups/Rectangle 10.png'
import thirdcap from '../assets/images/cups/Rectangle 11.png'
import fourthcap from '../assets/images/cups/Rectangle 12.png'
import fifthcap from '../assets/images/cups/Rectangle 13.png'
import sixthcap from '../assets/images/cups/Rectangle 14.png'
import sevencap from '../assets/images/cups/Rectangle 15.png'
import eightcap from '../assets/images/cups/Rectangle 16.png'

const Cap = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='pb-5 mb-5'>
                <p className='text-center text-[#1B1A1A]'>Follow Us Now</p>
                <h3 className='text-xl md:text-3xl font-bold text-[#331A15] text-center'>Follow on Instagram</h3>
            </div>
            <div className='grid md:grid-cols-4 gap-10'>
                <div className='transition hover:scale-105 shadow-xl rounded-xl '>
                    <img src={firstcap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >
                    <img src={secondcap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >
                    <img src={thirdcap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >
                    <img src={fourthcap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >
                    <img src={fifthcap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >
                    <img src={sixthcap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >

                    <img src={sevencap} alt="" />
                </div>
                <div className='transition hover:scale-105 shadow-xl rounded-xl ' >

                    <img src={eightcap} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cap;