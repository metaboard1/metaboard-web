import { type FC } from "react";



const HeroSection: FC = () => {

    return (
        <section
            className="flex justify-center items-center min-h-screen text-gray-900/80 overflow-hidden gradient-primary container mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="text-center space-y-10 lg:space-y-8 relative z-20 space-y-6 mb-12 rounded-2xl  border border-white/20 ">
                <blockquote className="p-5 md:p-10 bg-[hsl(35,44%,93%)] border rounded-lg xl:text-5xl text-center italic">
                    <span className="text-2xl sm:text-3xl lg:text-6xl text-primary ">
                        "
                    </span>
                    <span
                        className="font-bold text-lg sm:text-3xl lg:text-3xl text-gray-900 italic"
                        style={{
                            fontFamily: "Georgia, 'Times New Roman', serif",
                        }}
                    >
                        <span>
                            The real problem of humanity is the following:
                        </span>
                        We have Paleolithic emotions, medieval institutions and
                        godlike technology. And it is terrifically dangerous,
                        and it is now approaching a point of crisis overall.
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-5xl text-primary">
                        "
                    </span>
                    <cite className="block text-sm lg:text-sm text-primary not-italic text-end mt-4">
                        — Edward O. Wilson
                    </cite>
                </blockquote>
            </div>
              <div className="text-center absolute bottom-20 right-0 left-0">
                <div className="inline-flex flex-col items-center text-gray-400 group">
                    {/* <span className="text-sm font-medium mb-2">
                        Scroll for more details!
                    </span> */}
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;