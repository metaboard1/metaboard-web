'use client';

import { useEffect, useState, type FC } from "react"
import { ChevronUp } from "lucide-react"


const ScrollToTopBtn: FC = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', onPageScroll);

        return () => window.removeEventListener('scroll', onPageScroll);
    }, [isVisible]);

    const onPageScroll = () => {
        window.scrollY >= window.innerHeight ? setIsVisible(true) : (isVisible && setIsVisible(false));
    }
    return (
        <>
            <style jsx>{`
                .scroll-to-top {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    opacity: 0;
                    transform: scale(0.9);
                    transition: all 0.3s ease-in-out;
                    pointer-events: none;
                    z-index: 40;
                }
                
                /* Show button when not at top */
                .scroll-container:not(.at-top) .scroll-to-top {
                    opacity: 1;
                    transform: scale(1);
                    pointer-events: auto;
                }
            `}</style>
            
            <button
                className="scroll-to-top group p-4 rounded-full text-white bg-primary hover:bg-primary hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
            >
                <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
    </>);
}

export default ScrollToTopBtn;