import { IconArrowLeft } from "../helpers/IconArrowLeft";
import { IconoApp } from "../helpers/IconoApp";

export const Header = () => {
  return (
    <div className="py-5 text-3xl border-b-2 border-gradient">
      <div className="absolute flex justify-start">
        <IconArrowLeft />
      </div>
      <div className="flex justify-center text-white">
        <IconoApp />
      </div>
    </div>
  );
};
