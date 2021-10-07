const action = { authedUser: "sarahedo", questionId: "loxhs1bqm25b708cmbf3g" };

const state = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "asdasd",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "asdasd",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
};

const result = {
  ...state,
  [action.authedUser]: {
    ...state[action.authedUser],
    questions: [...state[action.authedUser].questions, action.questionId],
  },
};

console.log(result);
