let cuentas = [
  { nombre: "Mali", saldo: 200, password: "0123"}, 
  { nombre: "Gera", saldo: 290, password: "4567"}, 
  { nombre: "Maui", saldo: 67, password: "8910" } 
];
const maximo = 990;
const minimo = 10;

document.querySelector("#persona").addEventListener("change",leerPersona)
document.getElementById("menu").style.display = "none"

function leerPersona(){
  let indice = parseInt(document.querySelector("#persona").value);
  let nombre = cuentas[indice].nombre;

  document.getElementById("saludo").innerHTML = "Bienvenido " + nombre;
  document.getElementById("ingresarPassword").style.display = "block"

}

function ingreso(){
  let indice = parseInt(document.querySelector("#persona").value);
  let recibida = document.getElementById("password").value;
  let contra = cuentas[indice].password;

  if (recibida === contra) {
    document.getElementById("menu").style.display = "block"
    document.getElementById("ingresarPassword").style.display = "none"
    document.getElementById("ingresar").style.display = "none"
    document.getElementById("persona").style.display = "none"
     
  } else {
    document.getElementById("menu").style.display = "none"
      alert("Usuario o contraseña son incorrectos")
  } 
  
}

document.getElementById("fAgregar").addEventListener("submit",agregar)
function agregar(e){
  e.preventDefault()
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  let ingresoMonto = Number(document.querySelector("#ingresoMonto").value);
  document.querySelector("#montoIngresado").innerHTML = "Tu monto ingresado es: " + ingresoMonto;   
  let totalSumado = (saldo += ingresoMonto)
    if (totalSumado <= maximo) {
      cuentas[indice].saldo = totalSumado;
       document.querySelector("#nuevoSaldo").innerHTML = "Tu saldo total es: " + saldo; {    
    }
      }else{
        alert("transaccion declinada, el saldo maximo en al cuenta es $990 y en este momento tienes: "+ saldo)
      }  
}

document.getElementById("fRetirar").addEventListener("submit",retiro)
function retiro(e){
  e.preventDefault()
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  let saldoRetirado =  Number(document.querySelector("#ingresoMontoR").value);
  document.querySelector("#saldoRetirado").innerHTML = "Tu retiro es de : " + saldoRetirado;
  let nuevoSaldo = saldo - saldoRetirado;
  if (nuevoSaldo >= minimo) {
    cuentas[indice].saldo = nuevoSaldo;    
  document.querySelector("#nuevoSaldoR").innerHTML = "Tu saldo actual es: " + nuevoSaldo;     
  } else {
    alert("transaccion declinada, el saldo minimo en al cuenta es $10 y en este momento tienes: "+ saldo)
  }
}

function consulta(){
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  
  document.querySelector("#saldoActual").innerHTML = "Tu saldo actual es: " + saldo;
}

function cierre() {
  window.location.reload()
}
