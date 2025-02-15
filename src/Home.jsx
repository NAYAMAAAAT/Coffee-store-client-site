import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
    return (
        <>
        <nav className='mt-1'>
      <Navbar></Navbar>
        </nav>
        <main className='min-h-screen'>
         
           <Outlet></Outlet>
         
        </main>
        <footer>
          <Footer></Footer>
        </footer>
  
      </>
    );
};

export default Home;