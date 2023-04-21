export const modalStore = defineStore("mdoal", {
    state: () => ({
        visible: false,
        icon: {
            name: "",
            color: "",
        },
        content: "",
        callback: null,
    }),
    getters: {
        getVisible: (state) => state.visible,
        getIcon: (state) => state.icon,
        getContent: (state) => state.content,
    },
    actions: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        setModal(icon, content, callback = null) {
            this.icon = icon;
            this.content = content;
            this.visible = true;
            this.callback = callback;
        },
        actionCallback() {
            this.callback();
            this.visible = false;
        },
    },
});
