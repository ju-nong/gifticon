<template>
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
