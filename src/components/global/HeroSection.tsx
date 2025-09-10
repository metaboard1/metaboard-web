'use client';

import { type FC } from "react"
import { Mail } from "lucide-react";

type props = {
    // RenderTopIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    heading: string;
    headingSpan: string;
    description: string;
    note: string;
}

const HeroSection: FC<props> = ({  heading, headingSpan, description, note }) => {

    return (<>
        <section className="relative flex items-center py-20 overflow-hidden h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                        <RenderTopIcon className="w-8 h-8 text-red-600" />
                    </div> */}
                    {/* <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">Reach Out Anytime</h1> */}
                    <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                        {heading}
                        <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                            {" "}
                            {headingSpan}
                        </span>
                    </h1>
                    <p className="text-base text-gray-600 mb-8 leading-relaxed">
                        {description}
                    </p>
                    {
                        note &&
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-red-100 space-y-3">
                            <p className="text-sm text-gray-700">
                                {note}
                            </p>
                            <div className="flex items-center justify-center space-x-2">
                                <Mail className="w-4 h-4 text-red-600" />
                                <span className="text-sm text-gray-600">
                                    service.metaboard@gmail.com
                                </span>
                            </div>
                        </div>
                    }
                </div>

            </div>
            <div className="text-center absolute bottom-20 right-0 left-0">
                <div className="inline-flex flex-col items-center text-gray-400 group">
                    <span className="text-sm font-medium mb-2">
                        Scroll for more details!
                    </span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>


    </>)
}

export default HeroSection;