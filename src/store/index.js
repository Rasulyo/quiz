import {
  store
} from 'quasar/wrappers'
import {
  createStore
} from 'vuex'
import axios from 'axios'


export default store(function () {
  const Store = createStore({
    state: {
      user: '',
      categories: [],
      questions: [],
      countOfTrueAnswers: 0,
      countOfFalseAnswers: 0,
      totalValue: 0,
      gameStarted: false
    },

    actions: {
      GET_USER({
        commit
      }, enterInput) {
        commit('SET_USER_TO_STATE', enterInput)
      },
      GET_TRUE_ANSWER_FROM_USER({
        commit
      }, count) {
        commit('SET_TRUE_ANSWER_TO_STATE', count)
      },
      GET_FALSE_ANSWER_FROM_USER({
        commit
      }, count1) {
        commit('SET_FALSE_ANSWER_TO_STATE', count1)
      },
      GET_TOTAL_VALUE({commit}, total){
          commit('SET_TOTAL_VALUE_TO_STATE', total)
      },
      DELETE_INFO_STATE({commit}){
        commit('DELETE_INFO_FROM_STATE')
      },

      GET_CATERGORIES_FROM_API({
        commit
      }) {
        return axios('http://jservice.io/api/categories?count=5', {
            method: "GET",
          })
          .then((categories) => {
            commit('SET_CATERGORIES_TO_STATE', categories.data)
          })
          .catch(error => {
            console.log(error)
          })

      },
      GET_QUESTIONS_FROM_CATERGORIE({
        commit
      }) {
        let arr = [11496, 11498, 11499, 11504, 11504]
        arr.forEach((id) => {
          return axios(`http://jservice.io/api/category?id=${id}`, {
              method: "GET",
            })
            .then((questions) => {
              commit('UPDATE_QUESTIONS_TO_STATE', questions.data.clues.slice(0, 5))
            })
            .catch((error) => {
              console.log('error here', error)
              return error
            })
        })
      },
      SET_QUESTIONS({
        commit
      }) {
        commit('SET_QUESTIONS_TO_STATE')
      },
    },
    mutations: {
      SET_USER_TO_STATE: (state, enterInput) => {
        state.user = enterInput
      },
      SET_TRUE_ANSWER_TO_STATE: (state, count) => {
        state.countOfTrueAnswers += count
      },
      SET_FALSE_ANSWER_TO_STATE: (state, count1) => {
        state.countOfFalseAnswers += count1
      },
      SET_TOTAL_VALUE_TO_STATE: (state, total) => {
          state.totalValue += total
      },
      SET_CATERGORIES_TO_STATE: (state, categories) => {
        state.categories = categories;
      },
      SET_QUESTIONS_TO_STATE: (state) => {
        state.questions = [];
      },
      UPDATE_QUESTIONS_TO_STATE: (state, questions) => {
        questions.map(question => {
          state.questions.push(question);
        })
      },
      DELETE_INFO_FROM_STATE: (state) => {
        state.totalValue = 0
        state.countOfFalseAnswers = 0
        state.countOfTrueAnswers = 0
        state.user = ''
      }
    },
    getters: {
      CATERGORIES(state) {
        return state.categories
      },
      QUESTIONS(state) {
        return state.questions
      },
      USER(state) {
        return state.user
      },
      TRUE_ANSWERS(state) {
        return state.countOfTrueAnswers
      },
      FALSE_ANSWERS(state) {
        return state.countOfFalseAnswers
      },
      TOTAL_VALUE(state){
        return state.totalValue
      },

    },

    strict: process.env.DEBUGGING
  })

  return Store
})
