const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        //Sanitize markdown for description
        problemData.description = sanitizeMarkdownContent(problemData.description);
        console.log("problem data is:",problemData);

        const problem = await this.problemRepository.createProblem(problemData);
        console.log("problem response we got is:",problem);
        return problem;
    }

    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId){
        const problem = await this.problemRepository.getproblem(problemId);
        return problem;
    }

    async deleteProblem(problemId){
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

    async updateProblem(problemId){
        const problem = await this.problemRepository.updateProblem(problemId);
        return problem;
    }

}

module.exports = ProblemService;