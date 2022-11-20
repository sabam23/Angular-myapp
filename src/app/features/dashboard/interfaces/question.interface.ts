export interface Question {
    category: string;
    correctAnswer: string,
    difficulty: string,
    id: string,
    incorrectAnswers: string[],
    question: string,
    regions: [],
    tags: string[],
    type: string
}