import * as dao from "./dao.js";

export default function QuizRoutes(app) {

    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes()
        res.json(quizzes)
        
    }
    app.get("/api/quizzes", findAllQuizzes);


    const findQuizzesForCourse = async (req, res) => {
        const { courseId }  = req.params;
        // req.params is whatever is at the end of the url in the app.get(), in this case it's courseId
        // console.log(req.params)
        const quizzes = await dao.findQuizzesForCourse(courseId)
        res.json(quizzes)
    }
    app.get("/api/quizzes/:courseId", findQuizzesForCourse)


    const addQuiz = async (req, res) => {
        const quiz  = req.body
        const newQuiz = await dao.addQuiz(quiz)
        res.json(newQuiz)
    }
    app.post("/api/quizzes/addQuiz", addQuiz);




}