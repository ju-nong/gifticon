<template>
    <SnackBar
        v-for="({ type, message }, index) in snackbar"
        :type="type"
        :message="message"
    />
    <Modal />
    <div class="w-full h-full flex justify-center items-center p-[10rem]">
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
    </div>
</template>

<script setup>
import { userStore, snackbarStore } from "~/stores";
import { storeToRefs } from "pinia";

const user = userStore();
const { load } = storeToRefs(user);

const snackbars = snackbarStore();
const { snackbar } = storeToRefs(snackbars);

const router = useRouter();

watch(load, (to, from) => {
    if (!from && to) {
        setTimeout(() => {
            user.toggleLoad();
        }, 500);
    }
});
</script>

<style lang="scss"></style>
