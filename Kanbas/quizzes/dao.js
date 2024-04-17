import model from "./model.js";

export const findAllQuizzes = () => model.find();

export const findQuizzesForCourse = (courseId) => model.find({ courseId: courseId });

export const addQuiz = (quiz) => {
    console.log('Adding this new Quiz:', quiz)
    return model.create(quiz)
}