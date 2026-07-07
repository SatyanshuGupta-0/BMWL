const MapComponent = () => {
    return (
        <>
            <div className="m-2 md:flex items-center justify-center md:mt-10">
                <div>             

                <img className="h-44 w-44 place-self-center" src="/BMW LLP logo-01.png" alt="" />
                <h1 className="text-center font-bold font-serif mx-20 xs:text-[10px] md:text-lg mb-5">
                    KHASRA NO-384, VILL.
                    KULHARIWALA, P.O. MANDHALA, TEHSIL BADDI, DISTT. SOLAN

                </h1>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.8894527869766!2d76.92311667537608!3d30.805734274549113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8e740791b235%3A0x9b85807c6b887adc!2sBitna%20Village%20Road%2C%20Haryana%20134104!5e0!3m2!1sen!2sin!4v1740724054258!5m2!1sen!2sin" width="800" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="xs:w-[100vw] md:w-[650px] xs:justify-self-center md:justify-end"></iframe>


            </div>
        </>
    )
}

export default MapComponent;