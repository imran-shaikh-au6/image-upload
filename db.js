const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://imran:12345@cctech.1xdk0.mongodb.net/<dbname>?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
    .then(function () {
        console.log("Mongo db compass connected");
    })
    .catch(function (err) {
        console.log(err.message);
    });
