export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/json");
  if (!res.ok) {
    throw Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
};
