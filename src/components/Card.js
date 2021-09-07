import { Link } from "react-router-dom";
import { IconArrowRight } from "../helpers/IconArrowRight";

const Card = ({ donation }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 mb-3 border-2 rounded-xl border-gradient sm:grid-cols-8 sm:py-6">
      <div>
        <img
          className="bg-purple-500 rounded-full "
          src={donation.image}
          alt={donation.description}
          width="500px"
        />
      </div>
      <div className="col-span-3 text-3xl font-bold text-white sm:border-r-2">
        <h2>{donation.first_name}</h2>
        <h2>{donation.last_name}</h2>
      </div>
      <div className="col-span-4 sm:sr-only">
        <hr />
      </div>
      <div className="col-span-2 font-bold text-white">
        <h2>Total Donations</h2>
        <h2>{donation.donations}</h2>
      </div>
      <div className="flex justify-end col-span-2">
        <Link to={`/donador/${donation.id}`}>
          <IconArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
