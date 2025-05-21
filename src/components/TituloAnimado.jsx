import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import clsx from "clsx";
// import clsx from
gsap.registerPlugin(ScrollTrigger);

const TituloAnimado = ({ title, containerClass }) => {


    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tituloAnimacao = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom", 
                    end: "center bottom",
                    toggleActions: 'play none none reverse',
                }
            });
            tituloAnimacao.to('.animated-word', {
                opacity: 1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.02,
            })
        }, containerRef);
        return () => ctx.revert()
    }, [])
    return (
        <div
            ref={containerRef}
            className={`animated-title ${containerClass}`}>
            {title.split('<br />').map((line, index) => (
                <div
                    key={index}
                    className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
                >
                    {line.split(" ").map((word, i) => (
                        <span
                            key={i}
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TituloAnimado;