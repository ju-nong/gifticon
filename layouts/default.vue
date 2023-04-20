<template>
    <div class="w-full h-full flex justify-center items-center p-[10rem]">
        <SnackBar type="check" message="어서오고" />
        <div
            class="card-container w-full max-w-[767px] min-w-[300px] h-auto p-6"
        >
            <div
                v-if="load"
                class="flex justify-center items-center min-h-[400px]"
            >
                <span class="loader"></span>
            </div>
            <slot v-else />
        </div>
    </div>
</template>

<script setup>
import { userStore } from "~/stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { load, block } = storeToRefs(user);

const router = useRouter();

watch(load, (to, from) => {
    if (!from && to) {
        setTimeout(() => {
            user.toggleLoad();
        }, 500);
    }
});

watch(block, (to, from) => {
    if (!from && to) {
        router.replace("/");
    }
});
</script>

<style lang="scss"></style>
