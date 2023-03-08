function generateTable (employeeData) {
    let cards = '';

    employeeData.forEach((employee) => {
        cards += `
            <div class="card">
                <h1>${employee.name}</h1>
                <p>${employee.role}</p>
            </div>
        `;
    });

    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Employee Data</title>
                <link rel="stylesheet" href="product.css">
            </head>
            <body>
                <div class="team">
                    <h1>My Team!</h1>
                </div> 
                <div class="cards">
                    ${cards}
                </div>
            </body>
        </html>
    `;
}

module.exports = generateTable;