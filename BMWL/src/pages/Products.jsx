const Products = () => {
    return (
      <>
        <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold border-b-2 border-black my-10">Products</h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center mb-10 px-4 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Product 1 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center xl:m-5 space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative border-2 border-black hover:border-opacity-50 border-opacity-20 w-full md:w-80 h-60 rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src="/download.jpeg" alt="Printing on Aluminum" />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 opacity-50 font-bold px-2 py-1 text-center">
                Printing on Aluminum
              </p>
            </div>
            <div className="w-full md:w-96">
              <h1 className="font-bold text-xl">Printing on Aluminum</h1>
              <ul className="list-disc pl-5">
                <li>Direct printing on aluminum sheets, used for pharmaceutical and industrial applications.</li>
                <li>Resistant to moisture, heat, and chemical exposure.</li>
                <li>Used in medicine bottle seals, blister packs, and flexible packaging.</li>
              </ul>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center xl:m-5 space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-96 order-2 md:order-1">
              <h1 className="font-bold text-xl">Printing on Blister Packs</h1>
              <ul className="list-disc pl-5">
                <li>Used in the pharmaceutical industry for tablet and capsule packaging.</li>
                <li>High-resolution printing for batch numbers, expiry dates, and barcodes.</li>
                <li>Enhances tamper-proof and anti-counterfeit packaging.</li>
              </ul>
            </div>
            <div className="relative border-2 border-black hover:border-opacity-50 border-opacity-20 w-full md:w-80 h-60 rounded-xl overflow-hidden order-1 md:order-2">
              <img className="w-full h-full object-cover" src="/PS-1223-Foils-feature-image-Blister-Pack-Printing.jpg" alt="Printing on Blister Packs" />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 opacity-50 font-bold px-2 py-1 text-center">
                Printing on Blister Packs
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center xl:m-5 space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative border-2 border-black hover:border-opacity-50 border-opacity-20 w-full md:w-80 h-60 rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src="/Pharmaceutical-Aluminum-Foil.jpg" alt="Printing on Aluminum Foil" />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 opacity-50 font-bold px-2 py-1 text-center">
                Printing on Aluminum Foil
              </p>
            </div>
            <div className="w-full md:w-96">
              <h1 className="font-bold text-xl">Printing on Aluminum Foil</h1>
              <ul className="list-disc pl-5">
                <li>Ideal for sealing medicine strips and sachets.</li>
                <li>Enhances brand visibility and product protection.</li>
                <li>Heat-sealed and puncture-resistant for long shelf life.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right-side image */}
        <div className="w-full max-w-sm mt-6 xl:mt-0 xl:ml-10 xl:h-[600px]">
          <img className="w-full h-auto object-cover xl:h-[600px] rounded-lg shadow-lg" src="/printed-aluminum-pharma-foil.jpg" alt="Printed Aluminum Pharma Foil" />
        </div>
      </div>
      </>
    );
  };
  
  export default Products;
  