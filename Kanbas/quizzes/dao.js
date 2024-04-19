import model from "./model.js";

export const findAllQuizzes = () => model.find();

export const findQuizById = (quizId) => model.findById(quizId);

export const findQuizzesForCourse = (courseId) => model.find({ courseId: courseId });

export const addQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz)
};

export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });

export const updateQuiz = (quizId, quiz) => model.updateOne({ _id: quizId}, { $set: quiz});
