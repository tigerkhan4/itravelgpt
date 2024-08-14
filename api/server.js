import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import mongoose from "mongoose";
import Users from "./schemas/user.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// 
// 
// 
const database_url = process.env.DATABASE_URL;
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});
// 
// 
// 
app.get("/", async (req, res) => {
    res.status(200).send({
        message: "This is the iTravel AI App",
    });
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/", async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [
                {
                    role: "system",
                    content: "You are a quirky travel assistant, guide each user with their travel related questions only. Redirect questions that are not related to travel. Keep your responses cheeky, concise, and use emojis. Vary each greeting. Where most effective, respond with a visually appealing list.",
                },
                {
                    role: "user",
                    content: req.body.input,
                },
            ],
            temperature: 0.5,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        console.log("PASSED: ", req.body.input);
        console.log(response);
        res.status(200).send({
            bot: response.choices[0].message.content,
        });
    } catch (err) {
        console.log("FAILED: ", req.body.input);
        console.error(err.response.data);
        res.status(500).send(err.response.data);
    }
});

app.post("/signup", async(req, res) => {
    try {
        console.log(req.body);
        const new_user = new Users(req.body);
        const result = await new_user.save();
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

app.post("/login", async(req, res) => {
    try {
        console.log(req.body);
        const {
            email:userEmail,
            password:userPw
        } = req.body
        const response = await Users.find({
            email:userEmail,
            password:userPw
        });
        console.log(response);

        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})


app.listen(4000, () => console.log("Server is running on port 4000"));


