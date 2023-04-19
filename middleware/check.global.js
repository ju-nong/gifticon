import { userStore } from "~/stores/user";
import { getFirestore, collection, doc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export default defineNuxtRouteMiddleware((to) => {
    console.log(to);
    const db = getFirestore();
    const docs = doc(collection(db, "gifticon"), "aE9hnKqUPt5bp757ycQg");
    const gifticon = useDocument(docs);

    const { first } = gifticon.value;

    if (first) {
        const user = userStore();

        user.setFirst(first);
    } else if (to.name !== "index") {
        return "/";
    }
});
