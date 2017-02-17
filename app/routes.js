/**
 * Created by johns on 12/29/2016.
 */

// app/routes.js

var path = require('path');


var bodyParser = require('body-parser');



// grab the product model we just created
var Product = require('./models/product');
var Cart = require('./models/cart');

function sendViewMiddleware(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(path.resolve(__dirname + "/../public/views/" + view));
    };
    next();
}

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.use(sendViewMiddleware);
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    // sample api route
    app.get('/products', function(req, res) {
        // use mongoose to get all products in the database
        Product.find(function(err, products) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(products); // return all products in JSON format
        });
    });

    // route to handle creating goes here (app.post)
/*
    app.post('/cart/add', function(req, res) {
        var xxx = req;

        console.log(req.body);

        Cart.add(req.body, function(err, req) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json("OK"); // return all products in JSON format
        });
    });
*/

    app.post('/cart/checkout', function(req, res) {
var xxx = req.body.data[0];
var ses = req.session;

        console.log(req.body.data[0]);

/*
        Cart.add(req.body, function(err, req) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json("OK"); // return all products in JSON format
        });
*/
    });

    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
//        res.sendfile('./public/views/index.html'); // load our public/index.html file
        res.sendView('index.html');
    });
};

