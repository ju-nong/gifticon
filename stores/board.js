import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export const boardStore = defineStore("board", {
    state: () => ({
        board: null,
        docs: null,
        data: null,
    }),
    getters: {
        getData: (state) => state.data,
    },
    actions: {
        setBoard() {
            this.board = getFirestore();
            this.docs = doc(
                collection(this.board, "board"),
                "LhDkWvgtlE877X2Rp2kO",
            );
            this.data = useDocument(this.docs);
        },
        async updateBoard(value) {
            await updateDoc(this.docs, { item: [...this.data.item, value] });
        },
    },
});
