export const examStore = defineStore("exam", {
    state: () => ({
        step: 1,
        config: [
            [
                {
                    question,
                },
            ],
        ],
    }),
    getters: {
        getStep: (state) => state.step,
        getConfig: (state) => state.config,
    },
    actions: {
        nextStep() {
            this.step = this.step + 1;
        },
    },
});
