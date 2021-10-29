import Image from "next/image";
import {ChevronRightIcon} from '@heroicons/react/solid'
const Banner = () => {
  return (
    <div className="relative w-full h-[720px] border-b-8 border-[#222222]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fbanner.jpg?alt=media&token=e35f1827-1db2-4062-ab4f-c3bf1d88cc89"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center space-y-4 text-white text-center px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-lg lg:max-w-xl">
          Unlimited movies, TV shows and more.
        </h2>
        <p className="text-xl md:text-3xl">Watch anywhere. Cancel anytime.</p>
        <p className="text-lg md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <input type="text" placeholder="Email address" 
            className="outline-none border-none w-96 px-8 text-black  h-14"
            />
            <div className="bg-red-600 px-4 py-1.5 flex whitespace-nowrap items-center  h-12 rounded-sm md:rounded-none md:h-14"><p className="text-xl md:text-2xl">Get Started</p>
            <ChevronRightIcon className="h-8" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
