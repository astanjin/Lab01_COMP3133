const fs = require('fs');
const csv = require('csv-parser');
//canada
const canada = [];
// delete 

    fs.unlink('canada.txt', (err) => {
        if (err) {
            console.log(err);
        }
    });

// write data
fs.createReadStream('input_countries.csv').pipe(csv())
.on('data', (row) => {
    if (row.country === 'Canada') {
        canada.push(row);
    };

})
.on('end', () => {
    let str_canada = canada.map(r=> {
        return ` ${r['country']}, ${r['year']},${r['population']}`;
    });

    

    fs.writeFile('canada.txt', str_canada.join("\n"), (err) => {
        if(err) {
            console.log(err);
        }
    });
  
})
const usa =[];

//usa
    fs.unlink('usa.txt', (err) => {
        if (err) {
            console.log(err);
        }
    });

fs.createReadStream('input_countries.csv').pipe(csv())
.on('data', (row) => {

   if (row.country === 'United States') {
        usa.push(row);
   
    };
  })
  .on('end', () => {
    
      let str_usa = usa.map(r=> {
        return `${r['country']}, ${r['year']},${r['population']}`;
    });
     fs.writeFile('usa.txt', str_usa.join("\n"), (err) => {
        if(err) {
            console.log(err);
        };
    });    
})