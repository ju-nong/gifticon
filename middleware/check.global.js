import { userStore, pageStore } from "~/stores";

export default defineNuxtRouteMiddleware((to) => {
    const user = userStore();
    const page = pageStore();

    page.toggleLoad();

    if (to.name !== "index" && to.name !== "board") {
        if (!user.getLogin) {
            // 메인 페이지가 아니면서 현재 잘못된 접근일 경우
            page.setBlock(true); // 잘못된 접근 Flag 변수를 True로 변경
            // return navigateTo("/"); // 메인으로 이동    이거 넣으면 다른 게 작동이 안 되네
        }
    } else {
    }
});
