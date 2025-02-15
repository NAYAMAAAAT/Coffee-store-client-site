
import capIcon from '../assets/images/icons/1.png'
import titleIcon from '../assets/images/icons/2.png'
import ballIcon from '../assets/images/icons/3.png'
import battleIcons from '../assets/images/icons/4.png'

const Feature = () => {
    return (
        <div className='flex items-center justify-center py-5'>
            <div className=" stats space-y-3 w-11/12 mx-auto bg-transparent">
                <div className="stat">
                    <img className='w-8' src={capIcon} alt="" />
                    <div className="stat-title text-xl text-[#331A15]">Awesome Aroma</div>
                    <div className="stat-docs  text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</div>
                </div>

                <div className="stat  ">
                <img className='w-8' src={titleIcon} alt="" />
                    <div className="stat-title text-xl text-[#331A15]">High Quality</div>
                    <div className="stat-docs  text-[#1B1A1A]">We served the coffee to you maintaining the best quality</div>
                </div>

                <div className="stat ">
                <img className='w-8' src={ballIcon} alt="" />
                    <div className="stat-title text-xl text-[#331A15]">Pure Grades</div>
                    <div className="stat-docs  text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</div>
                </div>
                <div className="stat ">
                <img className='w-8' src={battleIcons} alt="" />
                    <div className="stat-title text-xl text-[#331A15]">Proper Roasting</div>
                    <div className="stat-docs  text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</div>
                </div>
            </div>
        </div>
    );
};

export default Feature;