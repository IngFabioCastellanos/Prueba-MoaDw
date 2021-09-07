import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { donadorPorID } from "../helpers/api";
import { Loader } from "../helpers/Loader";
import { useState as useStateHook } from "@hookstate/core";
import { mostarBoton } from "../helpers/store";

export const DonadorView = () => {
  const { id } = useParams();
  const [datosDonador, setDatosDonador] = useState({});
  const [mostrarLoader, setMostrarLoader] = useState(false);
  const mostarBotonLeft = useStateHook(mostarBoton);

  useEffect(() => {
    mostarBotonLeft.set(true);
    (async () => {
      const datos = await donadorPorID(id);
      setDatosDonador(datos);
      setMostrarLoader(true);
    })();
  }, []);

  console.log(datosDonador);

  return (
    <>
      {mostrarLoader ? (
        <div>
          <div className="flex flex-col items-center px-10">
            <h2 className="text-3xl font-extrabold text-center sm:mt-0 mt-7 color-title">
              {datosDonador.first_name}
            </h2>
            <h2 className="mb-5 text-3xl font-extrabold text-center sm:mt-0 color-title">
              {datosDonador.last_name}
            </h2>
            <img
              src={datosDonador.image}
              alt={datosDonador.description}
              className="bg-purple-500 rounded-full "
              width="150px"
            />
            <p className="text-center text-white text-opacity-60 my-7">
              {datosDonador.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Loader />
        </div>
      )}
    </>
  );
};
