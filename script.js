const notas = [
  "Respira. Estás haciendo lo mejor que puedes.",
  "No tienes que cargar con todo tú solo/a.",
  "Lo que sientes es válido.",
  "Pedir ayuda es un acto de valentía.",
  "Esto que duele ahora no define quién eres.",
  "No estás solo/a, aunque a veces se sienta así."
];

function nuevaNota() {
  const nota = notas[Math.floor(Math.random() * notas.length)];
  document.getElementById("nota").innerText = nota;
}

function guardarMensaje() {
  const texto = document.getElementById("mensaje").value;
  if (texto.trim() === "") return;

  const contenedor = document.getElementById("mensajes");
  const p = document.createElement("p");
  p.innerText = "🫶 " + texto;
  contenedor.appendChild(p);

  document.getElementById("mensaje").value = "";
}

window.onload = nuevaNota;
