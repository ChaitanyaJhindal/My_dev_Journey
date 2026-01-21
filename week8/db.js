const {Schema} = require("mongoose");

const userSchema = Schema({

});


const adminSchema = Schema({

});

const courseSchema = Schema({

});

const purchaseSchema = Schema({

});

const userModel = mongoose.Model("user",userSchema);
const adminModel = mongoose.Model("user",adminSchemaSchema);
const courseModel = mongoose.Model("user",courseSchemaSchema);
const purchaseModel = mongoose.Model("user",purchaseSchemaSchema);
