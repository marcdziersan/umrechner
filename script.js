function updateValues(changedField) {
    // Holt die Werte von den Eingabefeldern
    const decimalInput = document.getElementById("decimal");
    const binaryInput = document.getElementById("binary");
    const octalInput = document.getElementById("octal");
    const hexInput = document.getElementById("hex");

    let decimalValue;

    // Je nachdem, welches Feld geändert wurde, konvertieren wir die Werte
    switch (changedField) {
        case 'decimal':
            decimalValue = parseInt(decimalInput.value);
            if (!isNaN(decimalValue)) {
                binaryInput.value = decimalValue.toString(2);
                octalInput.value = decimalValue.toString(8);
                hexInput.value = decimalValue.toString(16).toUpperCase();
            }
            break;

        case 'binary':
            decimalValue = parseInt(binaryInput.value, 2);
            if (!isNaN(decimalValue)) {
                decimalInput.value = decimalValue;
                octalInput.value = decimalValue.toString(8);
                hexInput.value = decimalValue.toString(16).toUpperCase();
            }
            break;

        case 'octal':
            decimalValue = parseInt(octalInput.value, 8);
            if (!isNaN(decimalValue)) {
                decimalInput.value = decimalValue;
                binaryInput.value = decimalValue.toString(2);
                hexInput.value = decimalValue.toString(16).toUpperCase();
            }
            break;

        case 'hex':
            decimalValue = parseInt(hexInput.value, 16);
            if (!isNaN(decimalValue)) {
                decimalInput.value = decimalValue;
                binaryInput.value = decimalValue.toString(2);
                octalInput.value = decimalValue.toString(8);
            }
            break;
    }
}

function handleKeyDown(event) {
    // Überprüft, ob die Tasten ↑ oder ↓ gedrückt werden
    const input = event.target;
    if (event.key === "ArrowUp") {
        input.value = parseInt(input.value) + 1;
        updateValues(input.id);
        event.preventDefault(); // Verhindert das Scrollen
    } else if (event.key === "ArrowDown") {
        input.value = Math.max(0, parseInt(input.value) - 1); // Verhindert negative Werte
        updateValues(input.id);
        event.preventDefault(); // Verhindert das Scrollen
    }
}

// Initiale Werte setzen
updateValues('decimal'); // Setze die Anfangswerte beim Laden
