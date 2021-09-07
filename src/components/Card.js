import { Link } from "react-router-dom";
import { IconArrowRight } from "../helpers/IconArrowRight";

const Card = ({ donation }) => {
  return (
    <div className="grid grid-cols-4 p-4 mb-3 border-2 rounded-xl border-gradient sm:grid-cols-8 sm:py-6">
      <div>
        <img
          className="bg-purple-500 rounded-full "
          src={donation.image}
          alt={donation.description}
          width="500px"
        />
      </div>
      <div className="flex flex-col justify-center col-span-3 pb-2 pl-3 text-3xl font-bold text-white md:text-4xl border-opacity-30 sm:border-r-2">
        <h2>{donation.first_name}</h2>
        <h2>{donation.last_name}</h2>
      </div>
      <div className="col-span-4 my-2 sm:sr-only">
        <hr />
      </div>
      <div className="flex flex-col justify-center col-span-3 pl-3 font-bold text-white">
        <h2 className="text-lg md:text-xl">TOTAL DONATIONS</h2>
        <h2 className="text-3xl md:text-5xl">{donation.donations}</h2>
      </div>
      <div className="flex items-center justify-end col-span-1">
        <Link to={`/donador/${donation.id}`}>
          <IconArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
