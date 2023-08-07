export const toastStore = defineStore("toast", {
    state: () => ({
        toast: [],
    }),
    getters: {
        getToast: (state) => state.toast,
    },
    actions: {
        addToast(config) {
            this.toast = [...this.toast, config];
        },
    },
});
