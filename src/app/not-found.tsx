
const NotFound = () => {

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ }}>
            {/* Navigation Bar */}
          
            <div className="absolute inset-0 gradient-mesh"></div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-6 text-center relative z-10 ">
                <div className="mx-auto bg-white/10 background-blur-sm mt-20 mb-10 sm:mb-0 sm:mt-0 px-5 sm:px-20 py-10 rounded-2xl">
                    {/* 404 Error Code */}
                    <div className="mb-8">
                        <h1 className="text-8xl sm:text-8xl font-bold text-white/50 leading-none tracking-tighter">
                            404
                        </h1>
                    </div>

                    {/* Error Message */}
                    <div className="mb-12">
                        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Page Not Found
                        </h2>
                        <p className="text-lg sm:text-xl  text-white/90 mb-4 leading-relaxed mx-auto">
                            We're sorry, but the page you're looking for doesn't exist.
                        </p>
                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mx-auto">
                            The technical arm of Scriboard is still here to help you navigate back.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <a
                            href="/"
                            className="text-xl bg-transparent flex items-center gap-3 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-white/30 hover:border-white/50 min-w-[200px] text-center"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Return Home</span>
                        </a>

                        <a
                            href="/services"
                            className="text-xl bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-white/30 hover:border-white/50 min-w-[200px] text-center"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Additional Help Text */}
                    <div className="mt-16">
                        <p className="text-white/70 text-sm md:text-base">
                            Need assistance? Contact our support team or browse our knowledge Centre for legal education resources.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute top-32 right-20 w-24 h-24 border border-white/15 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-28 h-28 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/15 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/10 rounded-full"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>
    );
};

export default NotFound;