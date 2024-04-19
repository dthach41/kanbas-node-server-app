import * as dao from "./dao.js";

export default function QuizRoutes(app) {


    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes()
        res.json(quizzes)
        
    }
    app.get("/api/quizzes", findAllQuizzes);


    const findQuizById = async (req, res) => {
        try {
            const quiz = await dao.findQuizById(req.params.quizId);
            res.json(quiz);
        } catch (error) {
            console.error("Error fetching quiz by ID:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };
    app.get("/api/quizzes/quiz/:quizId", findQuizById)


    const findQuizzesForCourse = async (req, res) => {
        const { courseId }  = req.params;
        // req.params is whatever is at the end of the url in the app.get(), in this case it's courseId
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


    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };
    app.delete("/api/quizzes/:quizId", deleteQuiz);

    
    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const quiz = req.body
        const status = await dao.updateQuiz(quizId, quiz);
        console.log(quiz.published)
        res.json(status);
    };
    app.put("/api/quizzes/:quizId", updateQuiz)





}