import { useEffect, useState } from "react";
import Card from "./components/Card";
import { apiDonations } from "./helpers/api";
import { IconoApp } from "./helpers/IconoApp";

function App() {
  const [datosApi, setDatosApi] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    (async () => {
      const datos = await apiDonations(skip);
      setDatosApi(datos);
    })();
  }, [skip]);

  const next = () => setSkip(skip + 3);
  const prev = () => setSkip(skip - 3);

  return (
    <div className="px-5 sm:px-14 lg:px-60 bg-gradient">
      <div className="flex justify-center py-5 text-3xl text-white border-b-2 border-gradient">
        <IconoApp />
      </div>
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
      {datosApi.map((donation) => (
        <Card donation={donation} key={donation.first_name} />
      ))}
      <div className="grid grid-cols-2 gap-4 px-16 pb-10 sm:px-72">
        {skip > 0 && (
          <button onClick={prev} className="py-2 border-2 border-button">
            Prev
          </button>
        )}
        <button onClick={next} className="py-2 border-2 border-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
