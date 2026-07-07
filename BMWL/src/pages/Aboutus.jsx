const Aboutus=()=>{
    return(
        <>
           <div>
      {/* <div className='flex w-full bg-cover'>
        <img className=' w-full h-[500px]' src='/public/semple.jpg' alt=''/>
      </div> */}
      <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold border-b-2 border-black my-10">About Us</h1>
        </div>
      
    <div className='flex flex-col md:flex-row items-center md:items-start p-6 max-w-full mx-auto'>
        <div className='flex md:w-1/2 p-4'>
            <img src="/public/semple2.jpg" alt="" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className='flex-col md:w-1/2 p-4'>
            <h2 className='text-2xl font-bold mb-4'>About Our Org</h2>
            <div className='w-16 h-1 bg-black mb-2'></div>
            <p>
            At Bharat Med Wraps LLP, we understand the critical role that high-quality packaging plays in various industries, especially the pharmaceutical sector. We are dedicated to providing exceptional aluminum foil printing solutions tailored to meet your specific needs.
            With state-of-the-art equipment and a team of experienced professionals, we offer a wide range of foil printing capabilities, including:
            </p>
            <ul className='list-disc pl-5 mt-2'>
          <li>Printing on Aluminum</li>
          <li>Printing on Blister Packs</li>
          <li>Printing on Aluminum Foil</li>
        </ul>
        </div>
    </div>
    
    <div className='flex flex-col md:flex-row items-center md:items-start p-6 max-w-full mx-auto bg-gray-100'>
        <div className='flex-col md:w-1/2 p-4'>
            <h2 className='text-2xl font-bold text-black-100'>Our Objective</h2>
            <div className='w-16 h-1 bg-black mb-2 mt-2'></div>
            <p>
            Quality is at the heart of everything we do. We use premium materials and enforce rigorous quality control measures to ensure that every print delivers clarity, durability, and visual appeal. Our goal is to enhance the presentation of your products while maintaining the highest industry standards.
            </p>
        </div>
        <div className='md:w-1/2 p-4'>
            <img src='/public/semple2.jpg' alt='' className='w-full h-auto rounded-lg shadow-lg border'/>
        </div>
    </div>

    <div className='flex flex-col md:flex-row items-center md:items-start p-6 max-w-full mx-auto'>
        <div className='md:w-1/2 p-4'>
            <img src='/public/semple2.jpg' alt='' className='w-full h-auto rounded-lg shadow-lg border'/>
        </div>
        <div className='flex-col md:w-1/2 p-4'>
            <h2 className='text-2xl font-bold text-black-100'>Why Choose Us?</h2>
            <div className='w-16 h-1 bg-black mb-2 mt-2'></div>
            <ul className='list-disc'>
                <li ><strong>Precision & Innovation – </strong> We utilize advanced printing technologies to deliver outstanding results. </li>
                <li ><strong>Timely Delivery –</strong> We understand the importance of deadlines and ensure efficient turnaround times. </li>
                <li ><strong>Competitive Pricing –</strong> We offer cost-effective solutions tailored to your budget. </li>
                <li ><strong>Industry Expertise –</strong> Our team has extensive experience in foil printing, particularly for the pharmaceutical industry. </li>
            </ul>
            <p className='mt-2'>
            We are confident that our high-quality printed aluminum foil will enhance your product’s appeal and contribute to its success.
            </p>
        </div>
    </div>
</div>
        </>
    )
}
export default Aboutus