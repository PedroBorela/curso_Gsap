import { useRef } from "react";
import TituloAnimado from "./TituloAnimado";
import gsap from "gsap";
import BordasRedondas from "./BordasRedondas";
import Button from "./Button";
const Story = () => {
    const frameRef = useRef(null);
    const handleMouseLeave = () => {
        const element = frameRef.current;
        if (!element) return;
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }
    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50" >
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">O mundo do multiverso de IP</p>
                <div className="relative size-full">
                    <TituloAnimado
                        title="A hist<b>ó</b>ria de rei<b>no</b> perdido"
                        sectionId='#story'
                        containerClass="mt-5 pointer-events-nome mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    onMouseLeave={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    ref={frameRef}
                                    src="img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <BordasRedondas />

                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-80 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
The Open IP Universe
The story of
a hidden realm
Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.

                        </p>
                        <Button 
                            id="realm-button" 
                            title="Navegar pelo prólogo" 
                            containerClass="mt-5  bg-white " 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Story;