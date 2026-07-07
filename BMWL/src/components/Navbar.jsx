import { Link } from "react-router-dom";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-white w-[100vw] h-20 rounded-b-md shadow-lg flex items-center justify-between px-4 md:px-10 fixed z-50">
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                        {isOpen ? <RiCloseFill className="h-7 w-7" /> : <RiMenu2Fill className="h-7 w-7" />}
                    </button>
                    <img className="h-16 w-16" src="/BMW LLP logo-01.png" alt="logo" />
                </div>

                <ul className="hidden lg:flex items-center gap-5 text-sm text-black">
                    <Link to="/"><li className="hover:shadow-md font-bold px-2 rounded-full">HOME</li></Link>
                    <Link to="/aboutus"><li className="hover:shadow-md font-bold px-2 rounded-full">ABOUT US</li></Link>
                    <Link to="/infrastructure"><li className="hover:shadow-md font-bold px-2 rounded-full">INFRASTRUCTURE</li></Link>
                    <Link to="/products"><li className="hover:shadow-md font-bold px-2 rounded-full">PRODUCTS</li></Link>
                    <Link to="/quality"><li className="hover:shadow-md font-bold px-2 rounded-full">QUALITY</li></Link>
                    <Link to="/sustainabilit"><li className="hover:shadow-md font-bold px-2 rounded-full">SUSTAINABILITY</li></Link>
                </ul>

                <Link to="/contactus">
                    <button className="relative border-2 border-black text-sm px-4 py-2 text-black rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        CONTACT US
                    </button>
                </Link>
            </div>

          
            {isOpen && (
                <div className="z-50 lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center gap-4 transition-all duration-300">
                    <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link to="/aboutus" onClick={() => setIsOpen(false)}>ABOUT US</Link>
                    <Link to="/infrastructure" onClick={() => setIsOpen(false)}>INFRASTRUCTURE</Link>
                    <Link to="/products" onClick={() => setIsOpen(false)}>PRODUCTS</Link>
                    <Link to="/quality" onClick={() => setIsOpen(false)}>QUALITY</Link>
                    <Link to="/sustainabilit" onClick={() => setIsOpen(false)}>SUSTAINABILITY</Link>
                    <Link to="/contactus" onClick={() => setIsOpen(false)}>CONTACT US</Link>
                </div>
            )}
        </>
    );
};

export default Navbar;