export default {
  userGender(state, gender) {
    state.gender = gender;
  },
  userYear(state, year) {
    state.year = year;
  },
  userMonth(state, month) {
    state.month = month;
  },
  userDate(state, date) {
    state.date = date;
  },
  updateQuestion1(state, question1) {
    state.question1 = question1;
  },
  updateQuestion2(state, question2) {
    state.question2 = question2;
  },
  updateQuestion3(state, question3) {
    state.question3 = question3;
  },
  updateTextMessage(state, textMessage) {
    state.textMessage = textMessage;
  }
}