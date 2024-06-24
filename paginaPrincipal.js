var cuentas = [
    { nombre: "Alejandra", saldo: 800, password: "1234" },
    { nombre: "Alberto", saldo: 690, password: "5678" },
    { nombre: "Maria", saldo: 567, password: "abcd" }
  ];
  
  let cuentaActual = null;
  
  function login() {
    const accountIndex = document.getElementById("account").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("loginMessage");
    
    if (cuentas[accountIndex].password === password) {
      cuentaActual = accountIndex;
      mensaje.textContent = "Login exitoso";
      document.getElementById("login").style.display = "none";
      document.getElementById("menu").style.display = "block";
    } else {
      mensaje.textContent = "Password incorrecto. Intente nuevamente.";
    }
  }
  
  function consultarSaldo() {
    alert(`El saldo actual es: $${cuentas[cuentaActual].saldo}`);
  }
  
  function mostrarIngresarMonto() {
    document.getElementById("operacionTitulo").textContent = "Ingresar Monto";
    document.getElementById("menu").style.display = "none";
    document.getElementById("operacion").style.display = "block";
  }
  
  function mostrarRetirarMonto() {
    document.getElementById("operacionTitulo").textContent = "Retirar Monto";
    document.getElementById("menu").style.display = "none";
    document.getElementById("operacion").style.display = "block";
  }
  
  function ejecutarOperacion() {
    const monto = parseFloat(document.getElementById("monto").value);
    const operacion = document.getElementById("operacionTitulo").textContent;
    const mensaje = document.getElementById("operacionMensaje");
  
    if (isNaN(monto) || monto <= 0) {
      mensaje.textContent = "Por favor, ingrese un monto válido.";
      return;
    }
  
    if (operacion === "Ingresar Monto") {
      if (cuentas[cuentaActual].saldo + monto > 990) {
        mensaje.textContent = "No se puede ingresar el monto. El saldo no puede ser mayor a $990.";
      } else {
        cuentas[cuentaActual].saldo += monto;
        mensaje.textContent = `Monto ingresado: $${monto}. Nuevo saldo: $${cuentas[cuentaActual].saldo}`;
      }
    } else if (operacion === "Retirar Monto") {
      if (cuentas[cuentaActual].saldo - monto < 10) {
        mensaje.textContent = "No se puede retirar el monto. El saldo no puede ser menor a $10.";
      } else {
        cuentas[cuentaActual].saldo -= monto;
        mensaje.textContent = `Monto retirado: $${monto}. Nuevo saldo: $${cuentas[cuentaActual].saldo}`;
      }
    }
  }
  
  function cancelarOperacion() {
    document.getElementById("operacion").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("monto").value = "";
    document.getElementById("operacionMensaje").textContent = "";
  }
  
  function logout() {
    cuentaActual = null;
    document.getElementById("login").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("operacion").style.display = "none";
    document.getElementById("password").value = "";
    document.getElementById("loginMessage").textContent = "";
    document.getElementById("monto").value = "";
    document.getElementById("operacionMensaje").textContent = "";
  }
  