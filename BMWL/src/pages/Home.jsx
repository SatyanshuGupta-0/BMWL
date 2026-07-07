import { IoLocationSharp } from "react-icons/io5";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";

import Slider from "../components/Slider";
import MapComponent from "../components/MapComponent";

const Home = () => {
    return (
        <>

            <Slider />
            <div className="flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20">
                <h1 className="text-lg md:text-4xl font-bold border-b-2 border-black my-6 md:my-10">
                    WELCOME TO BHARAT MED WRAPS LLP
                </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full px-4 md:px-10 lg:px-20">

                <div className="w-full md:w-1/2 lg:w-[650px] flex justify-center md:justify-start mb-4 md:mb-0 mx-2">
                    <img src="/printed-aluminum-pharma-foil.jpg" alt="Printed Aluminum Pharma Foil" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>

                
                <div className="w-full md:w-1/2 lg:max-w-[600px] text-left">
                    <h3 className="font-bold text-md md:text-lg">Innovative Foil Printing Solutions for the Pharmaceutical Industry</h3>

                    <h1 className="my-3 font-bold text-xl md:text-2xl">About Us</h1>
                    <p className="text-sm md:text-base">
                        Bharat Med Wraps LLP (BMWL) is a newly incorporated company dedicated to providing high-quality foil printing solutions, primarily catering to the pharmaceutical industry in Himachal Pradesh and surrounding regions. With a leased area of 3000 sq. ft. in the prime industrial hub of Baddi, District Solan, our mission is to deliver superior packaging solutions that ensure product integrity, safety, and compliance with global standards.
                    </p>

                    <button className="relative border-2 border-black text-sm px-6 py-2 text-black rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white my-4">
                        READ MORE
                    </button>

                    <h1 className="my-3 font-bold text-xl md:text-2xl">Why Choose Us?</h1>
                    <ul className="list-disc pl-5 text-sm md:text-base">
                        <li>Expertise in Pharmaceutical Packaging: We specialize in foil printing, ensuring high-quality, tamper-proof, and secure packaging.</li>
                        <li>Strategic Location: Located in Baddi, a major pharmaceutical hub, we have access to a strong supply chain and client base.</li>
                        <li>Experienced Leadership: Our team consists of industry veterans with years of expertise in various business domains.</li>
                        <li>Sustainable & Secure Solutions: We prioritize eco-friendly and regulatory-compliant packaging techniques.</li>
                    </ul>
                </div>
            </div>

            {/* our Competitive Advantage */}
            <div className="flex items-center justify-center">
                <h1 className="xs:text-lg md:text-4xl font-bold border-b-2 border-black  my-10">Our Competitive Advantage</h1>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-self-centerxs:gap-3 md:gap-20 ">
                <div className=" m-4 p-3 border-2 rounded-md border-black">
                    < IoLocationSharp className="text-6xl justify-self-center text-red-400" />
                    <h1 className="justify-self-center font-bold"> Prime Location</h1>
                    <p className="justify-self-center">Strategically positioned for seamless connectivity.</p>
                </div>
                <div className=" m-4 p-3 border-2 rounded-md border-black">
                    <PiBuildingOfficeThin className="text-6xl justify-self-center text-gray-400" />
                    <h1 className="justify-self-center font-bold"> World-Class Infrastructure</h1>
                    <p className="justify-self-center">Built for efficiency, scalability, and reliability.</p>
                </div>
                <div className=" m-4 p-3 border-2 rounded-md border-black">
                    <GrTechnology className="text-6xl justify-self-center text-gray-400" />
                    <h1 className="justify-self-center font-bold">Advanced Equipment & Technology</h1>
                    <p className="justify-self-center">Cutting-edge tools for top-tier performance.</p>
                </div>
                <div className=" m-4 p-3 border-2 rounded-md border-black">
                    <RiTeamFill className="text-6xl justify-self-center text-gray-900" />
                    <h1 className="justify-self-center font-bold"> Expert & Empowered Team</h1>
                    <p className="justify-self-center">Skilled professionals driving innovation and excellence.</p>
                </div>
            </div>

            {/* Our Services */}
            <div className="flex flex-col items-center justify-center text-center px-4">
                <h1 className="xs:text-xl md:text-4xl font-bold border-b-2 border-black my-10">
                    Our Services
                </h1>

                <div className="max-w-[1200px] w-full mx-auto relative overflow-hidden flex flex-col md:flex-row items-center md:items-start">
                    {/* Background & Image Container */}
                    <div
                        className="relative w-full md:w-1/2 h-60 md:h-72 flex justify-center items-center"
                    >
                        <div
                            className="absolute inset-0 !-z-40"
                            style={{
                                clipPath: "polygon(50% 100%, 0% 100%, 0% 0%, 20% 0%)"
                            }}
                        ></div>
                        <img
                            className="w-[80%] md:w-[calc(100vw-55vw)] h-full  object-cover rounded-lg shadow-lg"
                            src="/heat-transfer-foil-printing-machine-org-1235287526546084523.jpg"
                            alt="Heat Transfer Foil Printing Machine"
                        />
                    </div>

                    <div className="flex items-center md:items-start justify-center text-left h-auto w-full md:w-1/2 p-4 md:p-6">
                        <ul className="list-disc pl-5 space-y-2">
                            <p className="font-bold text-lg md:text-xl">
                                At Bharat Med Wraps LLP, we offer specialized services that meet the evolving needs of the pharmaceutical packaging industry:
                            </p>
                            <li className="text-sm md:text-base">High-Quality Foil Printing for pharmaceutical applications</li>
                            <li className="text-sm md:text-base">Customizable Packaging Solutions tailored to client requirements</li>
                            <li className="text-sm md:text-base">Secure & Tamper-Proof Printing to ensure drug safety</li>
                            <li className="text-sm md:text-base">Advanced Printing Technologies to maintain clarity, durability, and compliance</li>
                        </ul>
                    </div>
                </div>
            </div>





            {/* PRODUCTS */}
            <div className="flex items-center justify-center text-center px-4">
                <h1 className="xs:text-xl md:text-4xl font-bold border-b-2 border-black my-10">Products</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {/* Product 1 */}
                <div className="relative border-2 border-black hover:border-opacity-50 border-opacity-20 w-full h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/download.jpeg"
                        alt="Printing on Aluminum"
                    />
                    <p className="absolute inset-x-0 bottom-4 text-center bg-gray-200 bg-opacity-70 font-bold py-1">
                        Printing on Aluminum
                    </p>
                </div>

                {/* Product 2 */}
                <div className="relative border-2 border-black hover:border-opacity-50 border-opacity-20 w-full h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/PS-1223-Foils-feature-image-Blister-Pack-Printing.jpg"
                        alt="Printing on Blister Packs"
                    />
                    <p className="absolute inset-x-0 bottom-4 text-center bg-gray-200 bg-opacity-70 font-bold py-1">
                        Printing on Blister Packs
                    </p>
                </div>

                {/* Product 3 */}
                <div className="relative border-2 border-black hover:border-opacity-50 border-opacity-20 w-full h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/Pharmaceutical-Aluminum-Foil.jpg"
                        alt="Printing on Aluminum Foil"
                    />
                    <p className="absolute inset-x-0 bottom-4 text-center bg-gray-200 bg-opacity-70 font-bold py-1">
                        Printing on Aluminum Foil
                    </p>
                </div>
            </div>

            <MapComponent />
        </>
    )
}

export default Home