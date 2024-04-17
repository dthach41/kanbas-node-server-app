import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: String,
    answer:String
});

const quizSchema = new mongoose.Schema({
    courseId: {type: String, required: true},
    name: String,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes"
    },
    shuffleAnswers: {type: Boolean, default: true},
    timeLimit: {type: String, default: "20"},
    multipleAttemptsL: {type: Boolean, default: false},
    showCorrectAnswers: Boolean,
    accessCode: {type: String, default: ""},
    oneQuestionAtTime: {type: Boolean, default: true},
    webcamRequried: {type: Boolean, default: false},
    lockQuestionsAfterAnswering: {type: Boolean, default: false},
    published: {type: Boolean, default: false},
    available: String,
    due: String,
    untilDate: String,
    points: String,
    open: Boolean,
    questions: [questionSchema],
},
    { collection: "quizzes"});

export default quizSchema;
