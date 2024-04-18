import model from "./model.js";

export const findAllQuizzes = () => model.find();

export const findQuizzesForCourse = (courseId) => model.find({ courseId: courseId });

export const addQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz)
}