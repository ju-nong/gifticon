import { userStore } from "~/stores";
import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export default defineNuxtRouteMiddleware((to) => {
    const user = userStore();

    user.toggleLoad();

    if (to.name !== "index") {
        if (!user.getLogin) {
            // 메인 페이지가 아니면서 현재 잘못된 접근일 경우
            user.setBlock(true); // 잘못된 접근 Flag 변수를 True로 변경
            // return navigateTo("/"); // 메인으로 이동    이거 넣으면 다른 게 작동이 안 되네
        }
    } else {
    }

    // const db = getFirestore();
    // const docs = doc(collection(db, "gifticon"), "aE9hnKqUPt5bp757ycQg");
    // const gifticon = useDocument(docs);

    // const { first } = gifticon.value;

    // if (first) {
    //     const user = userStore();

    // user.setFirst(first);
    // } else if (to.name !== "index") {
    //     return "/";
    // }
});
