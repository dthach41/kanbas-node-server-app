import model from "./model.js";

export const findAllQuizzes = () => model.find();

export const findQuizzesForCourse = (courseId) => model.find({ courseId: courseId });