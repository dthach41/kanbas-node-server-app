import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    _id: {type: String, rquired: true},
    correct: { type: Boolean, default: false },
    answer: { type: String }
});

const questionSchema = new mongoose.Schema({
    quizId: { type: String, required: true },
    points: Number,
    questionType: {
        type: String,
        enum: ["Multiple Choice", "True False", "Fill In Blank",],
        default: "Multiple Choice"
    },
    question: { type: String, required: true },
    answers: {
        type: [answerSchema],
        default: [], 
    }
},
    { collection: "quizQuestions"});

export default questionSchema;