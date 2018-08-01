const Question  = require('../models/question.js')

class Controller {
    static addQuestion(req, res)  {
        let ownerId = req.user.id
        let { title, content } = req.body
        let question = new Question({
          title, content, ownerId
        })
    
        question.save()
          .then(response => {
            res.status(201).json({
              message: 'create question success',
              question: response
            })
          })
          .catch(error => {
            res.status(400).json({
              message: 'create question failed',
              error: error.message
            })
    })
  }

    static  fetchQuestion (req, res){
      let _id = req.params.id
      Question.findById({ _id })
        .populate('ownerId')
        .populate({
          path: 'answersId', populate: [{ path: 'ownerId' }]
        })
        .then(question => {
          res.status(200).json({
            message: 'fetch question success',
            question
          })
        })
        .catch(error => {
          res.status(400).json({
            message: 'Show post failed',
            error: error.message
          })
  })
}
    
}

module.exports = Controller