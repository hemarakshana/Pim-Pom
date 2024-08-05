function generateList() {
    const input = document.getElementById('numberInput').value;
    const output = document.getElementById('output');
    let htmlContent = '';

    if (input && !isNaN(input)) {
        for (let i = 1; i <= input; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                htmlContent += `<span class="pimpom">PIMPOM</span> `;
            } else if (i % 3 === 0) {
                htmlContent += `<span class="pim">PIM</span> `;
            } else if (i % 5 === 0) {
                htmlContent += `<span class="pom">POM</span> `;
            } else {
                htmlContent += `${i} `;
            }
        }
    } else {
        htmlContent = 'Please enter a valid number.';
    }

    output.innerHTML = htmlContent;
}
