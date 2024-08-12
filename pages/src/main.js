const api = async () => {
  try {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    // const datica = JSON.stringify(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const body = document.querySelector("body");
const div = document.createElement("div");

(async () => {
  div.innerHTML = `${Object.keys(await api())} : ${Object.values(await api())}`;
  body.appendChild(div);
})();
