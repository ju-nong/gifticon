<template>
    <Head>
        <Title>생일선물 뽑기</Title>
        <Meta name="theme-color" content="rgb(26 136 233)" />
        <Meta name="description" content="이준용이 주는 생일선물!" />
        <Meta
            name="keywords"
            content="이준용, 오아리, 생일선물, 기프티콘, gifticon"
        />
        <Meta name="author" content="이준용" />
        <Meta content="생일선물 뽑기" property="og:title" />
        <Meta content="/ari.png" property="og:image" />
        <Meta content="website" property="og:type" />
        <Meta content="choose-gifticon.vercel.app" property="og:site_name" />
        <Meta content="//choose-gifticon.vercel.app/" property="og:url" />
        <Link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <SnackbarContainer />
    <Modal />
    <main class="w-full h-full flex justify-center items-center p-[10rem]">
        <div
            class="card-container w-full min-w-[300px] max-w-[500px] h-auto p-6"
        >
            <div
                v-if="load"
                class="flex justify-center items-center min-h-[400px]"
            >
                <span class="loader"></span>
            </div>
            <slot v-else />
        </div>
    </main>
    <Copyright />
</template>

<script setup>
import { pageStore } from "~/stores";
import { storeToRefs } from "pinia";

const page = pageStore();
const { load } = storeToRefs(page);

const router = useRouter();

watch(load, (to, from) => {
    if (!from && to) {
        setTimeout(() => {
            page.toggleLoad();
        }, 500);
    }
});
</script>

<style lang="scss">
@media screen and (max-width: 767px) {
    main {
        padding: 6rem !important;
    }
}
</style>
