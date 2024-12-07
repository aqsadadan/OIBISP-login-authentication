const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const CustomerModel = require('./models/Customer'); // Import the Customer model

const app = express(); // Create an instance of the Express application

// Middleware to parse JSON bodies and handle cross-origin requests
app.use(express.json()); 
app.use(cors());

// Connect to MongoDB using mongoose
mongoose.connect("mongodb://127.0.0.1:27017/customer")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));


// Route to handle user login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    CustomerModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // Compare the provided password with the hashed password in the database
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return res.status(500).json("Error comparing passwords");
                    }
                    if (isMatch) {
                        return res.json("Success"); // Case sensitive to match the front-end
                    } else {
                        return res.json("Incorrect password");
                    }
                });
                
            } else {
                res.json("No record found");
            }
        })
});
// Route to register a customer
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Hash the password
    bcrypt.hash(password, 10)
        .then(hash => {
            // Create a new customer with the hashed password
            CustomerModel.create({ name, email, password: hash })
                .then(customer => res.json(customer))
                .catch(err => {
                    console.error("Error creating customer:", err);
                    res.status(500).json("Error registering customer");
                });
        })
        .catch(err => {
            console.error("Error hashing password:", err);
            res.status(500).json("Error hashing password");
        });
});
// Start the Express server, listening on port 5000
app.listen(3001, () => {
    console.log("Server running on port 4000");
});
