const a = document.getElementById("a");
const b = document.getElementById("b");
const out = document.getElementById("out");
const time = document.getElementById("time");

document.getElementById("go").addEventListener("click", () => {
  const diff = Math.abs(new Date(b.value) - new Date(a.value));

  if (isNaN(diff)) {
    alert("Wypełnij obie daty");
    return;
  }

  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  time.textContent = `Minęło: ${days} dni, ${hours % 24} godz., ${minutes % 60} min`;
});
