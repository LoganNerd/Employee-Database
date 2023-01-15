function generateTable (data) {
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
            <div class = "team">
            <h1>My Team!</h1>
            </div> 
    
        <div class = "cards">        
    
        <div class = "card">  
        
        <h1> ${data.employee} </h1>
        <p> ${data.role} </p>
       
        </div>

        <div class = "card2">  
        
        <h1> ${data.employee2} </h1>
        <p> ${data.role2} </p>
       
        </div>

        <div class = "card3">  
        
        <h1> ${data.employee3} </h1>
        <p> ${data.role3} </p>
       
        </div>

        <div class = "card4">  
        
        <h1> ${data.employee4} </h1>
        <p> ${data.role4} </p>
       
        </div>

        </div>
        
    </body>
    </html> 
  
  `;
  }
  
  module.exports = generateTable;
  