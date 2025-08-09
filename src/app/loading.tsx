// app/loading.tsx
'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import Lottie from 'lottie-react';
// import animationData from '/public/lottie/loading.json'; 

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black">
            <div
                className="w-[100vw] h-[100vh] flex flex-col items-center justify-center animate-fade-in animate-pulse"
                style={{
                    background: 'radial-gradient(at right top, #010101, #840102)',
                }}
            >
                <img
                    src="/assets/images/loading.gif"
                    alt=""
                    style={{ height: '60vh' }}
                />

                {/* <DotLottieReact
                    src="/lottie/loading.lottie"
                    loop
                    autoplay
                    style={{ height: '60vh' }}
                    onLoad={() => console.log('Lottie loaded successfully')}
                    onError={(error) => console.error('Lottie error:', error)}
                /> */}
                <div className="text-xl font-semibold animate-pulse text-white">Meta Loading...</div>
            </div>
        </div>

    );
}
export default Loading;