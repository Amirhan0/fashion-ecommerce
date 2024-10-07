const FooterForEveryone = () => {
    return (
        <>
        <div className="mt-24">
            <div className="flex justify-between items-center mx-auto max-w-7xl w-full">
                <div className="flex flex-col items-center space-y-2">
                    <p className="font-sans text-white">Политика конфиденциальности</p>
                    <p className="font-sans text-white">Согласие на обработку персональных данных</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <img src="/footerlogo.svg" alt="Логотип" className="h-10" />
                    <span className="text-white">2024 ITSTEP</span>
                </div>
                <div className="flex items-center">
                    <img src="/telegram.svg" alt="Telegram" className="h-6 w-6 cursor-pointer" />
                    <img src="/telegram.svg" alt="Telegram" className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterForEveryone;
