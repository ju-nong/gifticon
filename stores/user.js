export const userStore = defineStore("user", {
    state: () => ({
        login: false, //
    }),
    getters: {
        getLogin: (state) => state.login,
    },
    actions: {
        setLogin(flag) {
            this.login = flag;
        },
    },
});
