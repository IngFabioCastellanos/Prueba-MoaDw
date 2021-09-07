import { useState } from "@hookstate/core";
import { IconArrowLeft } from "../helpers/IconArrowLeft";
import { IconoApp } from "../helpers/IconoApp";
import { mostarBoton } from "../helpers/store";

export const Header = () => {
  const mostarBotonLeft = useState(mostarBoton);
  return (
    <div className="py-5 text-3xl border-b-2 border-gradient">
      <div className="absolute flex justify-start">
        {mostarBotonLeft.get() && <IconArrowLeft />}
      </div>
      <div className="flex justify-center text-white">
        <IconoApp />
      </div>
    </div>
  );
};
