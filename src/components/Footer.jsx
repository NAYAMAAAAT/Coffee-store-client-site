
import banner from '../assets/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Footer = () => {
    return (

        <div className='bg-gray-400 bg-no-repeat bg-cover bg-center'>
            <footer className="footer w-11/12 mx-auto text-neutral-content p-10">
                <aside>
                    <img className='md:w-16 w-8' src={banner} alt="" />
                    <p className='text-[#331A15] md:text-3xl font-bold'> Espresso Emporium</p>
                    <p className='text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaFacebook color='#331A15' size={24} />
                        </a>
                        <a>
                            <FaTwitter color='#331A15' size={24} />

                        </a>
                        <a>
                            <FaInstagram color='#331A15' size={24} />

                        </a>
                        <a>
                            <FaLinkedin color='#331A15' size={24} />

                        </a>
                    </div>
                    <p className='md:text-3xl font-bold text-[#331A15]'>Get in Touch</p>

                    <div>
                        <p className='flex my-2 items-center gap-2'><FaPhoneAlt color='#331A15' size={18} /> <a href="tel:+8801402327683" className='text-xl text-[#331A15]' > 01402327683</a> </p>
                        <p className='flex my-2 items-center gap-2'><MdOutlineEmail color='#331A15' size={24} /> <a href="mailto:majidul123tub@gmail.com" className='text-xl text-[#331A15]' > majidul123tub@gmail.com</a></p>
                        <p className='flex my-2 items-center gap-2'><CiLocationOn color='#331A15' size={24} /> <a className='text-xl text-[#331A15]' > 72, Wall street, King Road, Dhaka</a></p>



                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#331A15] md:text-2xl">Contact With Us</h6>

                    <input type="text" placeholder="Name" className="input input-bordered w-full " />
                    <input type="text" placeholder="Email" className="input input-bordered w-full " />
                    <textarea className="textarea textarea-bordered" placeholder="Messege"></textarea>
                    <button className='btn btn-sm md:btn-md  rounded-full'>Send Message</button>

                </nav>
            </footer>
            <div className='bg-copyright bg-no-repeat bg-center bg-cover flex items-center justify-center'>
                <p className='text-white text-center py-1'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;