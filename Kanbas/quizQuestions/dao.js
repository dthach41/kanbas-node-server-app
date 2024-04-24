import model from "./model.js";

export const findQuestionsForQuiz = (quizId) => model.find({ quizId: quizId });

export const addQuestion = (question) => {
    delete question._id
    return model.create(question)
};

export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });

export const updateQuestion = (questionId, question) => model.updateOne({ _id: questionId }, { $set: question });

