import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { donadorPorID } from "../helpers/api";
import { Loader } from "../helpers/Loader";
import { useState as useStateHook } from "@hookstate/core";
import { mostarBoton } from "../helpers/store";
import { CardTotalDonations } from "../components/CardTotalDonations";

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

  return (
    <>
      {mostrarLoader ? (
        <div>
          <div className="flex flex-col items-center px-10">
            <h2 className="text-5xl font-extrabold text-center md:text-6xl sm:mt-0 pt-7 color-title">
              {datosDonador.first_name}
            </h2>
            <h2 className="mb-5 text-5xl font-extrabold text-center md:text-6xl sm:mt-0 color-title">
              {datosDonador.last_name}
            </h2>
            <img
              src={datosDonador.image}
              alt={datosDonador.description}
              className="bg-purple-500 rounded-full "
              width="250px"
            />
            <p className="text-xl text-center text-white md:text-3xl text-opacity-60 my-7">
              {datosDonador.description}
            </p>
          </div>
          <CardTotalDonations
            props={{
              donations: datosDonador.donations,
              total: datosDonador.total,
            }}
          />
          <div className="flex justify-center py-3">
            <button className="w-full p-5 text-2xl font-extrabold border rounded-md border-button sm:w-1/2">
              MAKE DONATION
            </button>
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
