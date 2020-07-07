const {graphql} = require('graphql')
const schema = require('./schema')
const Todo = require('../models/todo')


const users = [
  {name: 'Витя', age: 27, email: 'viktor@mail.ru'},
  {name: 'Юля', age: 25, email: 'julia@mail.com'}
]

module.exports = {
  test() {
    return {
      count: Math.trunc(Math.random() * 10),
      users
    }
  },
  random({min, max, count}) {
    const arr = []
    for (let i = 0; i < count; i++) {
      const random = Math.random() * (max - min) + min
      arr.push(random)
    }
    return arr
  },
  addTestUser({user: {name, email}}) {
    const user = {
      name, email,
      age: Math.ceil(Math.random() * 30)
    }
    users.push(user)
    return user
  },

  async getTodos() {
    try {
      return await Todo.findAll()
    } catch (e) {
      throw new Error("Чтото пошло не так")
    }
  },

  async createTodo({todo}) {
    try {
      return  await Todo.create({
        title: todo.title,
        done: false,
      })
    } catch (e) {
      throw new Error("Неполучилось получить ответ от базы")
    }
  }

}