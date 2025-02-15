
import ErrorImg from '../assets/images/404/404.gif'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
const Error = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div>
            <Link to='/' className="flex items-center  py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <img src={ErrorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;