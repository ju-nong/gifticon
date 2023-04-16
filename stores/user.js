export const userStore = defineStore("counter", {
    state: () => ({ first: false }),
    getters: {
        isFirst: (state) => state.first,
    },
    actions: {
        setFirst(first) {
            this.first = first;
        },
    },
});
