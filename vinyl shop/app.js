const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const fs= require('fs');;

const app = express();


const port = 1234;

// directorul 'views' va conține fișierele .ejs (html + js executat la server)

app.set('view engine', 'ejs');
// suport pentru layout-uri - implicit fișierul care reprezintă template-ul site-ului este views/layout.ejs
app.use(expressLayouts);
// directorul 'public' va conține toate resursele accesibile direct de către client (e.g., fișiere css, javascript, imagini)
app.use(express.static('public'))
// corpul mesajului poate fi interpretat ca json; datele de la formular se găsesc în format json în req.body
app.use(bodyParser.json());
// utilizarea unui algoritm de deep parsing care suportă obiecte în obiecte
app.use(bodyParser.urlencoded({ extended: true }));

// la accesarea din browser adresei http://localhost:1234/ se va returna textul 'Hello World'
// proprietățile obiectului Request - req - https://expressjs.com/en/api.html#req
// proprietățile obiectului Response - res - https://expressjs.com/en/api.html#res

/*app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res){
    res.render("index");
});

*/

app.get('/', (req,res)=> 
{
    res.sendFile (__dirname + '/views' + '/acasa.html');


});


app.get('/acasa', (req,res)=> 
{
    res.sendFile (__dirname + '/views' + '/acasa.html');


});

app.get('/buy', (req,res)=> 
{
    res.sendFile (__dirname + '/views' + '/buy.html');


});

app.get('/cumpara', (req,res)=> 
{
    res.sendFile (__dirname + '/views' + '/cumpara.html');


});

app.get('/vinil', (req,res)=> 
{
    res.sendFile (__dirname + '/views' + '/vinil.html');


});


app.get('/chestionar', (req,res)=> 
{
    res.sendFile (__dirname + '/views' + '/chestionar.html');

});


app.listen(port, () => console.log(`Serverul rulează la adresa http://localhost:${port}`));
