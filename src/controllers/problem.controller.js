const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const BadRequest = require('../errors/badrequest.error');

const problemService = new ProblemService(new ProblemRepository());
function pingProblemController(req, res){
    return res.json({ message : 'Problem Controller is up'});
}

async function addProblem(req, res, next){
    try {
        console.log("incoming req body as:",req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched a problems',
            error: {},
            data: problem
        });
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req, res, next){
    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted a problem',
            error: {},
            data: deletedProblem
        });
    } catch (error) {
        next(error);
    }
}

async function updateProblem(req, res, next){
    try {
        const updatedProblem = await problemService.updateProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully Updated a problem',
            error: {},
            data: updatedProblema
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}