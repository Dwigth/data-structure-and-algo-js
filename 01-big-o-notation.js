function constantTime() {
  console.time("Ejemplo tiempo constante");
  const arr = ["A", "B", "C", "S", "F", "E"];
  console.log(arr[1]);
  console.timeEnd("Ejemplo tiempo constante");
}

function linearTime(n) {
  console.time("Ejemplo tiempo lineal");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.timeEnd("Ejemplo tiempo lineal");
}

function quadraticTime(n) {
  console.time("Ejemplo tiempo cuadratico");
  for (let i = 0; i < n; i++) {
    console.log(`${i}`);
    for (let j = 0; j < n; j++) {
      console.log(`${i} - ${j}`);
    }
  }
  console.timeEnd("Ejemplo tiempo cuadratico");
}

function cubicTime(n) {
  console.time("Ejemplo tiempo cubico");
  for (let i = 0; i < n; i++) {
    console.log(`${i}`);
    for (let j = i; j < n; j++) {
      console.log(`${i} - ${j}`);
      for (let k = j; k < n; k++) {
        console.log(`${i} - ${j} - ${k}`);
      }
    }
  }
  console.timeEnd("Ejemplo tiempo cubico");
}

function logarithmicTime(n) {
  console.time("Ejemplo tiempo logaritmico");
  let el = 0;
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
    el++;
  }
  console.log(`El total de elementos impresos es ${el}`);
  console.timeEnd("Ejemplo tiempo logaritmico");
}

// constantTime();
// linearTime(1e1);
// quadraticTime(1e1);
// cubicTime(1e1);
logarithmicTime(1000000);
