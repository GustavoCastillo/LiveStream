import { FC } from "react";
import { resizeImage } from "../shared/utils";
import Booking from "./Booking";

interface FilmProps {
  item: {};
}

const Film: FC<FilmProps> = ({ item }) => {
  return (
    <div>
        <div
        style={{
        backgroundImage: `url(${resizeImage(item.backdrop_path)})`,
        }}
        className="bg-no-repeat bg-center bg-cover md:h-[400px] h-[300px] rounded-md relative"
    >
        <div className="bg-gradient-to-br from-transparent to-black/80 h-full rounded-bl-2xl">
        <div className="flex flex-col md:flex-row bottom-[-85%] md:bottom-[-20%]  items-start absolute left-1/2 -translate-x-1/2  w-full max-w-[1000px]">
            <div className="flex gap-5 items-center">
            <div className="shrink-0 w-[185px] ml-3 md:ml-0">
                <img
                src={resizeImage(item.poster_path, "w185")}
                effect="opacity"
                className="w-full h-full object-cover rounded-md"
                alt="Poster"
                />
            </div>
            </div>

            <div className="flex-grow md:ml-14 ml-6 mt-6 md:mt-0">
            <div className="md:h-28 flex items-end">
                <h1 className=" text-white text-[45px] font-bold leading-tight ">
                {item.title ||
                item.name}
                </h1>
            </div>
            </div>
        </div>
        
        </div>
        <Booking movie ={item}/>
    </div>
    <div className="m-[100px] text-lg">
        <h2>Overall</h2>
            <>
                <p className="text-xl italic mb-8 text-white text-center">
                    {item.tagline}
                </p>
                <p className="text-white mb-3 font-medium"> STORY </p>         
                {item.overview}
                <p className="text-white font-medium mt-8 mb-3">DETAILS</p>
                        
                
                    <p>Status: {item.status}</p>
                    {item.media_type === "movie" && (
                    <p>Release date: {item.release_date}</p>
                    )}
                    {item.media_type === "tv" && (
                    <p>Last air date: {item.last_air_date}</p>
                    )}
                    <p>
                    Spoken language:
                    {item?.spoken_languages?.map(
                        (language, index) =>
                        `${index ? ", " : ""} ${language.english_name}`
                    )}
                    </p>
                </>         
        </div>
    </div>
  );
};

export default Film;
