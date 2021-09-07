import { useEffect, useState } from "react";
import { useState as useStateHook } from "@hookstate/core";

import Card from "../components/Card";
import { apiDonations } from "../helpers/api";
import { Loader } from "../helpers/Loader";
import { mostarBoton } from "../helpers/store";

function App() {
  const [datosApi, setDatosApi] = useState([]);
  const [skip, setSkip] = useState(0);
  const [mostarLoader, setMostarLoader] = useState(false);
  const mostarBotonLeft = useStateHook(mostarBoton);
  useEffect(() => {
    mostarBotonLeft.set(false);
    setMostarLoader(true);
    (async () => {
      const datos = await apiDonations(skip);
      setDatosApi(datos);
      setMostarLoader(false);
    })();
  }, [skip]);

  const next = () => setSkip(skip + 3);
  const prev = () => setSkip(skip - 3);

  return (
    <>
      <div className="sm:grid-cols-2 sm:grid sm:pt-12 sm:mb-2">
        <h1 className="mb-5 text-3xl font-extrabold text-center sm:mt-0 mt-7 color-title">
          Donations
        </h1>
        <div className="flex items-center justify-end">
          <select className="w-full p-2 mb-5 font-bold text-white bg-black bg-opacity-0 border border-white sm:w-3/4 sm:w-3/3 rounded-xl">
            <option value="">Sort By Donations</option>
          </select>
        </div>
      </div>
      {mostarLoader ? (
        <div className="text-center h-96">
          <Loader />
        </div>
      ) : (
        datosApi.map((donation) => (
          <Card donation={donation} key={donation.first_name} />
        ))
      )}
      <div className="grid grid-cols-2 gap-4 px-16 pb-10 lg:px-72">
        {skip > 0 && (
          <button onClick={prev} className="py-2 border-2 border-button">
            Prev
          </button>
        )}
        <button onClick={next} className="py-2 border-2 border-button">
          Next
        </button>
      </div>
    </>
  );
}

export default App;
