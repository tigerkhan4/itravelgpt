import mongoose from "mongoose";

// const mongoose = use("mongoose");
const user_schema = new mongoose.Schema(
    {
        "name":{
            "type":"String",
            "required":true,
        },
        "email":{
            "type":"String",
            "required":true,
            "unique":true,
        },
        "password":{
            "type":"String",
            "required":true,
        }
    }
);

const Users = mongoose.model("User", user_schema);

export default Users;