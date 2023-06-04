const mongoose = require('mongoose');

const todo = require('../models/todo');

const todo_task = [{ task: "add new task", date: "23/03/2023" }];

module.exports = {
  home: async function(req, res) {
    try {
      const tasks = await todo.find({});
      return res.render('home', {
        title: "home",
        todo_task: tasks
      });
    } catch (err) {
      console.log('error in fetching tasks from db', err);
      return res.redirect('back');
    }
  },
  
  processForm: async function(req, res) {
    const newTask = await todo.create({
      task : req.body.task,
      category : req.body.category,
      date : req.body.date
    });
    console.log('******',newTask);
    return res.redirect('/');
  },
  //now left with find and display

  // findTasks: async function(req,res){
  //   try{
  //     const tasks = await todo.find({});
  //     return res.render('home',{
  //       title: "My task",
  //       todo_task: tasks
  //     });
  //   }catch(err){
  //     console.log('error in fetching tasks from db',err);
  //     return res.redirect('back');
  //   }
  // },
  deletetask: async function(req, res) {
    try {
      const taskIds = req.body.taskCheckbox;
      //no task selected for deletion
      if (!taskIds || !Array.isArray(taskIds)) {
        console.log('No tasks selected for deletion');
        return res.redirect('/');
      }
      //specify an array of values to match against a field
      await todo.deleteMany({ _id: { $in: taskIds } });
      console.log('Tasks deleted successfully');
      return res.redirect('/');
    } catch (err) {
      console.log('Error deleting tasks:', err);
      return res.redirect('back');
    }
  }
  
};
