const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.use(layouts);

app.get("/contact", function(req, res) {
    var contact = {
        Name: "Steve Peters",
        Email: "steve@steve.com",
        Phone: "206-555-1212",
        Fax: "Who uses faxes anymore?",
        Site: "http://steve.io"
    };
    res.render("contact", {contact});
});


app.get("/skills", function(req, res) {
    var skills = [
        "JavaScript",
        "HTML 5",
        "CSS 3",
        "Node JS",
        "Express JS",
        "Crooning"
    ];
    res.render("skills", {skills});
});



app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});

