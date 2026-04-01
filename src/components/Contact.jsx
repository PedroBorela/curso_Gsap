import Button from "./Button";
import TituloAnimado from "./TituloAnimado";
const ImageClipBox = ({ src, clipClass }) => {
    return (
        <div className={clipClass}>
            <img src={src} />
        </div>
    )

}
const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        clipClass="contact-clip-path-1"
                        src="img/contact-1.webp"
                    />
                    <ImageClipBox
                        clipClass="contact-clip-path-2 translate-y-60 md:translate-y-40 md:translate-x-10 lg:translate-y-20"
                        src="img/contact-2.webp"
                    />
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 sm:left-2/3 md:left-auto md:right-10 md:top-0 lg:z lg:top-10 lg:w-80 ">
                    <ImageClipBox clipClass="absolute md:scale-125" src="img/swordman-partial.webp"
                    />
                    <ImageClipBox clipClass="sword-man-clip-path md:scale-125" src="img/swordman.webp"
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10px] uppercase mb-10">Junte-se ao Zentry</p>
                    <TituloAnimado containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]" title="Vamos constr<b>u</b>ir <br />uma nova er<b>a</b><br /> de jogos juntos"/>
                    <Button title="Entrar em contato" containerClass="mt-10 cursor-pointer bg-white" />

                </div>
            </div>
        </div>
    )
}

export default Contact;