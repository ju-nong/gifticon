export const modalStore = defineStore("mdoal", {
    state: () => ({
        visible: false,
        icon: {
            name: "",
            color: "",
        },
        content: "",
        buttonText: "확인",
        callback: null,
    }),
    getters: {
        getVisible: (state) => state.visible,
        getIcon: (state) => state.icon,
        getButtonText: (state) => state.buttonText,
        getContent: (state) => state.content,
    },
    actions: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        setModal(icon, content, callback = null, buttonText = "확인") {
            this.icon = icon;
            this.content = content;
            this.visible = true;
            this.callback = callback;
            this.buttonText = buttonText;
        },
        actionCallback() {
            this.visible = false;
            this.callback();
        },
    },
});
