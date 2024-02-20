import { SearchBar, SearchBarProps } from "./SearchBar";

export const Header: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <header className="relative w-full sm:h-1/4 md:h-1/3 xl:h-1/3 2xl:h-1/4 ludus-bg text-white py-6 overflow-hidden">
            <img
                src="https://res.cloudinary.com/dgxkfjsbz/image/upload/v1708420159/Ludus/fondo-mobile_ix1jsa.png"
                alt="Background"
                className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="https://res.cloudinary.com/dgxkfjsbz/video/upload/v1708348327/Ludus/banner-comp_c5qfvq.mp4" type="video/mp4" />
                Your browser does not support videos.
            </video>
            <div className="relative z-10 container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="z-10 flex items-center">
                    <a href="/">
                        <img className="h-8 w-auto" src="https://res.cloudinary.com/dgxkfjsbz/image/upload/v1708344010/logo_ludus_w0a3fg.png" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center w-full z-10">
                <h1 className="sm:text-xl md:text-2xl font-forum lg:text-3xl font-bold mb-4 mt-6">PREPARE YOUR COCKTAIL</h1>
            </div>
            <SearchBar onSearch={onSearch} />
        </header>
    );
};

