import { FC } from "react";
import { useAppDispatch } from "../hooks/appStoreHooks";
import { toggleOpen } from "../store/slices/toggleModalSlice";

const WelcomeText: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="h-full flex justify-center items-center bg-[url('./src/assets/background.svg')] bg-cover bg-center dark:bg-[url('./src/assets/darkBackground.svg')] dark:*:text-white">
            <div>
                <div className="text-center space-y-2 py-2">
                    <h1 className="text-5xl">Welcome to Coder Media</h1>
                    <p className="text-lg">
                        A fun place to interact with coders and developers
                    </p>
                </div>
                <div className="flex space-x-2 mt-5 justify-center">
                    <button
                        className="bg-neutral-700 text-white font-semibold px-4 py-1 rounded-md hover:text-black hover:bg-white hover:outline hover:outline-1 hover:outline-neutral-700 transition-all"
                        onClick={() => {
                            dispatch(toggleOpen());
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeText;
