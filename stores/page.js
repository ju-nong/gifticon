export const pageStore = defineStore("page", {
    state: () => ({
        block: false,
        load: true,
    }),
    getters: {
        getBlock: (state) => state.block,
        getLoad: (state) => state.load,
    },
    actions: {
        setBlock(flag) {
            this.block = flag;
        },
        toggleLoad() {
            this.load = !this.load;
        },
    },
});
