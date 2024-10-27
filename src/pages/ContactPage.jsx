const ContactPage = () => {
    return (
        <div className="flex flex-col items-end w-full mt-9 mx-auto relative h-full px-4 md:px-0">
            <h1 className="leading-none text-5xl md:text-9xl noselect text-[#1F252D] font-usuallybold opacity-50 text-right mb-4">
                Контакты
            </h1>
            <div className="absolute right-0 top-12">
                <h1 className="bottom-10 md:bottom-5 text-4xl md:text-8xl text-white font-uindbase relative z-10 text-right text-shadow">
                    КОНТАКТЫ
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-16">
                <div className="bg-[#1F252D] text-white rounded-lg p-6 m-2 md:m-4 w-full md:w-1/2 flex flex-col items-center">
                    <img
                        src="/amir.jpg" 
                        alt="Амир"
                        className="rounded-full mb-4 w-32 h-32 object-cover"
                    />
                    <h2 className="text-4xl font-bold mb-2">Амир</h2>
                    <p className="text-lg font-arial">Email:amirgasanov245@gmail.com</p>
                    <p className="text-lg font-arial">Телефон: +77752754313</p>
                    <p className="text-lg font-arial">tg: @ameerqan</p>
                </div>
                 <div className="bg-[#1F252D] text-white rounded-lg p-6 m-2 md:m-4 w-full md:w-1/2 flex flex-col items-center">
                    <img
                        src="/max.jpg" 
                        alt="Макс"
                        className="rounded-full mb-4 w-32 h-32 object-cover" 
                    />
                    <h2 className="text-4xl font-bold mb-2">Макс</h2>
                    <p className="text-lg font-arial">Email:maxmax20051120@gmail.com</p>
                    <p className="text-lg font-arial">Телефон: +77071613629</p>
                    <p className="text-lg font-arial">tg: @mode_all_mute</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
