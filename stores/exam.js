import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export const examStore = defineStore("exam", {
    state: () => ({
        step: 0,
        score: -1,
        db: null,
        docs: null,
        data: null,
    }),
    getters: {},
    actions: {
        setStep(step) {
            this.step = step;
        },
        setChoice(index, choice) {
            this.data.item[index].choice = choice;
        },
        setExam() {
            this.db = getFirestore();
            this.docs = doc(
                collection(this.db, "exam"),
                "cM3en4qB8GywrJbY0Nrf",
            );
            this.data = useDocument(this.docs);
        },
        async updateDB(key, value) {
            await updateDoc(this.docs, { [key]: value });
        },
    },
});
