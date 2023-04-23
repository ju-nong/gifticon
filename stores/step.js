export const stepStore = defineStore("step", {
    state: () => ({
        step: 1,
        questions: [],
    }),
    getters: {
        getStep: (state) => state.step,
        getQuestions: (state) => state.questions,
    },
    actions: {
        nextStep() {
            this.step = this.step + 1;
        },
    },
});
