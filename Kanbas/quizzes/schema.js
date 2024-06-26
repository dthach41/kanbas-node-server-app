import mongoose from "mongoose";


const quizSchema = new mongoose.Schema({
    courseId: {type: String, required: true},
    name: String,
    description: String,
    quizType: {
        delete: {type: Boolean, default: false},
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz"
    },
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes"
    },
    shuffleAnswers: {type: Boolean, default: true},
    timeLimit: {type: String, default: "20"},
    multipleAttempts: {type: Boolean, default: false},
    showCorrectAnswers: Boolean,
    accessCode: {type: String, default: "None"},
    oneQuestionAtTime: {type: Boolean, default: true},
    webcamRequried: {type: Boolean, default: false},
    lockQuestionsAfterAnswering: {type: Boolean, default: false},
    published: {type: Boolean, default: false},
    available: String,
    due: String,
    untilDate: {type: String, default: "Forever"},
    points: String,
    open: {type: Boolean, default: false},
    questions: [],
},
    { collection: "quizzes"});

export default quizSchema;
