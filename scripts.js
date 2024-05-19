document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const sum = number1 + number2;

    document.getElementById('result').textContent = `Hasil: ${sum}`;
});
