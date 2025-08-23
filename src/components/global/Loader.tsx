import { RefObject, type FC } from "react";

const Loader: FC<{ isVisible?: boolean;  ref?: RefObject<HTMLDivElement | null>; }> = ({ isVisible, ref}) => {
    return (<>
            <div ref={ref} className={`fixed ${isVisible ? 'flex' : 'hidden'} w-screen h-screen top-0 left-0  flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]`}>
                <div className="spinner"></div>
            </div>
    </>);
}
export default Loader;