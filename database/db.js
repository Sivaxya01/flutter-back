const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Flutter', {
    useNewUrlParser: true,
    useUnifiedTopology : true
})

//127.0.0.1