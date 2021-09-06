export const apiDonations = async (inicio = 0) => {
  let cantidad = 3;
  let sort = "donations";
  const url = `https://moadw-challenge.herokuapp.com/api/find-many?skip=${inicio}&limit=${cantidad}&sort=${sort}`;

  const respuesta = await fetch(url);
  const datos = respuesta.json();
  return datos;
};
