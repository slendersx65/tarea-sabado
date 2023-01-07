const dinero = parseInt(prompt("dinero de usuario:"));
const apuesta = parseInt(prompt("insertar dinero a apostar:"));

for (let i = 0; i < 2; i++) {
  const resultado = Math.floor(Math.random() * 2) + 1;
  if (resultado === 1) {
    console.log("cara");
  } else {
    console.log("sello");
  }
}

if (resultado === 1) {
  dinero += apuesta * 2;
  console.log(`felicidades ganaste, tu saldo es: ${dinero}`);
} else {
  dinero -= apuesta;
  console.log(`es una lastima, mejor suerte la proxima, tu saldo es: ${dinero}`);
}
