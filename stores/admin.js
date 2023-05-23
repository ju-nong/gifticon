import { getFirestore, collection, doc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export const adminStore = defineStore("admin", {
    state: () => ({
        admin: null,
        docs: null,
        data: null,
    }),
    getters: {
        getData: (state) => state.data,
    },
    actions: {
        setAdmin() {
            this.admin = getFirestore();
            this.docs = doc(
                collection(this.admin, "admin"),
                "zcnVV8Hhvlfd3xr6INF6",
            );
            this.data = useDocument(this.docs);
        },
    },
});
