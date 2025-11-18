const inputGrados = document.getElementById("grados");
const inputRadianes = document.getElementById("radianes");

function cambiarDesdeGrados() {
    const val = parseFloat(inputGrados.value);
    if (!Number.isFinite(val)) { inputRadianes.value = ""; return; }
    inputRadianes.value = Number(((val * Math.PI) / 180).toFixed(6));
}

function cambiarDesdeRadianes() {
    const val = parseFloat(inputRadianes.value);
    if (!Number.isFinite(val)) { inputGrados.value = ""; return; }
    inputGrados.value = Number(((val * 180) / Math.PI).toFixed(6));
}
