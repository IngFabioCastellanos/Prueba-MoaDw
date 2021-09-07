import { useState } from "@hookstate/core";
import { useHistory } from "react-router-dom";
import { IconArrowLeft } from "../helpers/IconArrowLeft";
import { IconoApp } from "../helpers/IconoApp";
import { mostarBoton } from "../helpers/store";

export const Header = () => {
  const mostarBotonLeft = useState(mostarBoton);
  const history = useHistory();
  return (
    <div className="py-5 text-3xl border-b-2 border-gradient">
      <div className="absolute mt-3">
        {mostarBotonLeft.get() && (
          <button onClick={history.goBack}>
            <IconArrowLeft />
          </button>
        )}
      </div>
      <div className="flex justify-center text-white">
        <IconoApp />
      </div>
    </div>
  );
};
