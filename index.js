document.getElementById('quadraticForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.innerHTML = "Please enter valid numbers for a, b, and c.";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            resultDiv.innerHTML = c === 0 ? "Infinite solutions" : "No solution";
        } else {
            resultDiv.innerHTML = `Linear solution: x = ${-c / b}`;
        }
        return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultDiv.innerHTML = `Two distinct real roots: x₁ = ${root1}, x₂ = ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultDiv.innerHTML = `One real root: x = ${root}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        resultDiv.innerHTML = `Complex roots: x₁ = ${realPart} + ${imaginaryPart}i, x₂ = ${realPart} - ${imaginaryPart}i`;
    }
});

