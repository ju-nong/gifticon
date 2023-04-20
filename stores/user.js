export const userStore = defineStore("user", {
    state: () => ({
        start: false, //
        block: false,
        load: false,
    }),
    getters: {
        getStart: (state) => state.start,
        getBlock: (state) => state.block,
        getLoad: (state) => state.load,
    },
    actions: {
        setStart(flag) {
            this.start = flag;
        },
        setBlock(flag) {
            this.block = flag;
        },
        toggleLoad() {
            this.load = !this.load;
        },
    },
});
