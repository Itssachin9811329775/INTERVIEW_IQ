import express from "express"//importing express
import dotenv from "dotenv"//imports the default export from the dotenv package and stores it in a variable named dotenv
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
dotenv.config()//it read variable from .env file and store into process.env object
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()

app.use(cors({
    origin:"https://interview-iq-client2.onrender.com",
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 6000
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()//we have imported this function,see line 3
})
