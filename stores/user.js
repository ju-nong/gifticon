export const userStore = defineStore("user", {
    state: () => ({
        login: false, //
        block: false,
        load: false,
    }),
    getters: {
        getLogin: (state) => state.login,
        getBlock: (state) => state.block,
        getLoad: (state) => state.load,
    },
    actions: {
        setLogin(flag) {
            this.login = flag;
        },
        setBlock(flag) {
            this.block = flag;
        },
        toggleLoad() {
            this.load = !this.load;
        },
    },
});
