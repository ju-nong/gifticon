export const snackbarStore = defineStore("snackbar", {
    state: () => ({
        snackbar: [],
    }),
    getters: {
        getSnackbar: (state) => state.snackbar,
    },
    actions: {
        addSnackbar(config) {
            this.snackbar = [...this.snackbar, config];
        },
    },
});
