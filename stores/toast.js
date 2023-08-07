export const toastStore = defineStore("toast", {
    state: () => ({
        toast: [],
    }),
    getters: {},
    actions: {
        addToast(config) {
            this.toast = [...this.toast, config];
        },
    },
});
