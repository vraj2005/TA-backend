const express = require('express'); 
const fs = require('fs'); 
const app = express(); 
const PORT = 3030; 
 
app.get('/', (req, res) => { 
    fs.readFile('Demo.txt', (err, data) => { 
        if (err) { 
            res.status(500).send(err);  
        } else {  
            res.status(200).type('text/html').send(data); 
        } 
    }); 
}); 
 
app.get('/about', (req, res) => { 
    res.send('<h1>About Us</h1><p>This is the about page.</p>');
    fs.readFile('about.txt', (err, data) => { 
        if (err) { 
            res.status(500).send(err); 
        } else { 
            res.status(200).send(data); 
        } 
    }); 
}); 
 
app.get('/contact', (req, res) => { 
    fs.readFile('contact.txt', (err, data) => { 
        if (err) { 
            res.status(500).send(err); 
        } else { 
            res.status(200).type('text/html').send(data); 
        } 
    }); 
}); 
 
app.post("/login", (req, res) => {
  res.send("Login Successful");
});

app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`); 
});