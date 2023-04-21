import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export const dbStore = defineStore("db", {
    state: () => ({
        db: null,
        docs: null,
        data: null,
    }),
    getters: {
        getData: (state) => state.data,
    },
    actions: {
        setDB() {
            this.db = getFirestore();
            this.docs = doc(
                collection(this.db, "gifticon"),
                "aE9hnKqUPt5bp757ycQg"
            );
            this.data = useDocument(this.docs);
        },
        async updateDB(key, value) {
            await updateDoc(this.docs, { [key]: value });
        },
    },
});
