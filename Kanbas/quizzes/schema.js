import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: String,
    answer:String
});

const quizSchema = new mongoose.Schema({
    courseId: {type: String, required: true},
    name: String,
    available: String,
    due: String,
    points: String,
    open: Boolean,
    questions: [questionSchema],
},
    { collection: "quizzes"});

export default quizSchema;
