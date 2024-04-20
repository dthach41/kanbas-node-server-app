import * as dao from "./dao.js";

export default function QuizQuestionsRoute(app) {


    const findQuestionsForQuiz = async (req, res) => {
        const { quizId } = req.params;
        // req.params is whatever is at the end of the url in the app.get(), in this case it's courseId
        const questions = await dao.findQuestionsForQuiz(quizId)
        console.log(questions.length)
        res.json(questions)
    }
    app.get("/api/quizzes/quizQuestions/:quizId", findQuestionsForQuiz)


    const addQuestion = async (req, res) => {
        const question = req.body
        const newQuestion = await dao.addQuestion(question)
        res.json(newQuestion)
    }
    app.post("/api/quizzes/quizQuestions", addQuestion);


    const updateQuestion = async (req, res) => {
        const { questionId } = req.params;
        const question = req.body
        const status = await dao.updateQuestion(questionId, question);
        console.log(questionId)
        res.json(status);
    }
    app.put("/api/quizzes/quizQuestions/:questionId", updateQuestion)



}