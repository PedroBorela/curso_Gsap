import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import TituloAnimado from "./TituloAnimado";
gsap.registerPlugin(ScrollTrigger);
const About = () => {

    useGSAP(()=> {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:"center center",
                end:'+=800 center' ,
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius:0
        })
    })
    return(

        <div id="about" className=" w-screen min-h-screen ">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Bem vindo ao Zentry
                </h2>

                <TituloAnimado title=" 
            Descub<b>r</b>a as mai<b>o</b>res aventuras de <br /> mundos compartilhados " containerClass="mt-5 !text-black text-center"/>
                
                <div className="about-subtext">
                    <p>O jogo dos jogos começa - sua vida, agora um MMORPG épico</p>
                    <p>Zentry une cada jogador de diversos jogos e plataformas</p>
                </div>
            </div>
            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img src="img/about.webp" alt="Background" className="abs
                    left-0 top-0 size-full object-cover"/>
                </div>
            </div>
      </div>
    )

}

export default About;