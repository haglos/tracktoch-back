const mongoose = require("mongoose")

mongoose.connect(process.env.DB_STRING).then(() => {
    //console.log("connected to database")
})

const CosignmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //SHIPPER DETAILS
    shipper_name: {
        type: String
    },
    shipper_phoneNumber: {
        type: String
    },
    shipper_address: {
        type: String
    },
    shipper_email: {
        type: String
    },
    //RECIEVER DETAILS
    reciever_name: {
        type: String
    },
    reciever_phoneNumber: {
        type: String
    },
    reciever_address: {
        type: String
    },
    reciever_email: {
        type: String
    },
    //SHIPMENT DETAILS
    type_of_shipment: {
        type: String
    },
    weight: {
        type: String
    },
    packages: {
        type: String
    },
    product: {
        type: String
    },
    payment_mode: {
        type: String
    },
    carrier: {
        type: String
    },
    depature_time: {
        type: String
    },
    destination: {
        type: String
    },
    pickup_time: {
        type: String
    },
    courier: {
        type: String
    },
    mode: {
        type: String

    },
    quantity: {
        type: String
    },
    total_freight: {
        type: String
    },
    courier_Reference_No: {
        type: String
    },
    origin: {
        type: String

    },
    pickup_date: {
        type: String
    },
    expected_delivery_date: {
        type: String
    },

    //PACKAGES
    Qty: {
        type: String
    },
    piece_type: {
        type: String
    },
    description: {
        type: String
    },
    length: {
        type: String
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    status: {
        type: String
    },

})

const HistorySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: {
        type: String
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String
    },
    UploadedBy: {
        type: String
    },
    Remarks: {
        type: String
    },
    lattitude: {
        type: String
    },
    longitude: {
        type: String
    },
    cossignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cossignment"
    },

})

const AdminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber:{
        type:String
    },
    registerationNumber:{
        type:String
    },
    address:{
        type:String
    }
})

let Cosignment = new mongoose.model("Cosignment", CosignmentSchema)
let History = new mongoose.model("History", HistorySchema)
let Admin = new mongoose.model("Admin", AdminSchema)


module.exports.Cossignment = Cosignment
module.exports.History = History
module.exports.Admin = Admin



