const Footer = () => {
    return(
        <footer className="min-h-[10vh] w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">Entre em contato</p>
                <div className="relative size-full">
                    <h2 className="mt-5 pointer-events-none mix-blend-difference relative z-10">Fale conosco</h2>
                    <form className="mt-5">
                        <input type="text" placeholder="Seu nome" className="mb-4 p-2 rounded-md" />
                        <input type="email" placeholder="Seu email" className="mb-4 p-2 rounded-md" />
                        <textarea placeholder="Sua mensagem" className="mb-4 p-2 rounded-md" />
                        <button type="submit" className="mt-5 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200">Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;