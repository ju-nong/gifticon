export const userStore = defineStore("user", {
    state: () => ({
        login: false,
        pick: -1,
    }),
    getters: {
        getLogin: (state) => state.login,
        getPick: (state) => state.pick,
    },
    actions: {
        setLogin(flag) {
            this.login = flag;
        },
        setPick(pick) {
            this.pick = pick;
        },
    },
});
