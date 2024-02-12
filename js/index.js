function convertirKmAMetros() {
    var km = parseFloat(document.getElementById("kmInput").value);
    if (isNaN(km)) {
      alert("Por favor ingresa un valor válido para los kilómetros.");
      return;
    }
    var metros = km * 1000;
    document.getElementById("resultadoKmToMeters").value = metros;
  }

  function convertirMetrosACentimetros() {
    var metros = parseFloat(document.getElementById("mInput").value);
    if (isNaN(metros)) {
      alert("Por favor ingresa un valor válido para los metros.");
      return;
    }
    var centimetros = metros * 100;
    document.getElementById("resultadoMToCm").value = centimetros;
  }

  function convertirPiesAPulgadas() {
    var pies = parseFloat(document.getElementById("ftInput").value);
    if (isNaN(pies)) {
      alert("Por favor ingresa un valor válido para los pies.");
      return;
    }
    var pulgadas = pies * 12;
    document.getElementById("resultadoFtToInches").value = pulgadas;
  }

  function convertirYardasAPulgadas() {
    var yardas = parseFloat(document.getElementById("yardaInput").value);
    if (isNaN(yardas)) {
      alert("Por favor ingresa un valor válido para las yardas.");
      return;
    }
    var pulgadas = yardas * 36;
    document.getElementById("resultadoYardToInches").value = pulgadas;
  }

  function limpiarCampo(idCampo) {
    document.getElementById(idCampo).value = "";
    document.getElementById("resultadoKmToMeters").value = "";
    document.getElementById("resultadoMToCm").value = "";
    document.getElementById("resultadoFtToInches").value = "";
    document.getElementById("resultadoYardToInches").value = "";
  }