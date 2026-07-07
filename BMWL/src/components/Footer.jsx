import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="xs:w-[100vw] lg:w-[calc(100vw-10px)] h-72 bg-[#f0efef] border-t-2 float-end rounded-t-md text-black md:flex justify-between">
                <div className="flex items-start xs:gap-5 md:gap-20">
                    <div className="m-2">
                    <h2 className="m-2 border-b-2 w-36 font-bold border-black">PRODUCTS</h2>
                    <li>Printing on Aluminum</li>
                    <li>Printing on Blister Packs</li>
                    <li>Printing on Aluminum Foil</li>
                    </div>

                    <div className="m-2">
                    <h2 className="m-2 border-b-2 w-36 font-bold border-black ">ABOUT BMWL</h2>
                    <li>ABOUT US</li>
                    <li>PRODUCTS</li>
                    <li>INFRASTRUCTURE</li>
                    <li>QUALITY</li>
                    <li>SUSTAINABILITY</li>
                    <li>CONTACT US</li>
                </div>
                </div>
                <div
                    className="bg-black xs:w-full sm:w-[600px] xs:h-40 sm:h-72 lg:h-72 grid grid-cols-1 justify-center text-white"
                    style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 0%)" }}
                >
                    <div className="flex items-start justify-center ">
                    <h2 className="m-2 border-b-2 w-36 border-white ">GET IN TOUCH</h2>
                    </div>
                <div className="h-10 w-32  place-self-end  text-xl flex items-center gap-2">
                    <ImFacebook2/>
                    <FaInstagram className="text-2xl"/>
                    <FaYoutube className="text-2xl"/>
                    <FaXTwitter/>
                </div>
                </div>
            </div>

            <div className="w-full xs:mt-12 sm:mt-0 h-16 bg-black float-end  text-white flex items-center justify-center">
                2025 All Rights Reserved &copy; BMWL
            </div>
        </>
    )
}

export default Footer