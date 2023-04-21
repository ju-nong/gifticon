<template>
    <TransitionFade duration="300">
        <div v-if="visible" class="w-[100vw] h-[100vh] fixed z-[100]">
            <div
                class="w-full h-full absolute top-0 left-0 bg-black/60 z-[90]"
                @click="modal.hide"
            ></div>
            <div
                class="modal-container max-w-[400px] min-w-[300px] p-7 pb-10 bg-white rounded-lg relative z-[100] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center"
            >
                <button
                    class="close text-4xl text-[#c0c5cb] flex self-end"
                    :class="callback === null ? 'visible' : ''"
                    @click="modal.hide"
                >
                    <Icon name="ic:round-close" />
                </button>
                <Icon
                    class="mb-4"
                    size="80px"
                    :name="icon.name"
                    :color="icon.color"
                />
                <p class="mt-4 mb-10 text-[18px] font-semibold">
                    {{ content }}
                </p>
                <button
                    class="primary-button small"
                    @click="modal.actionCallback"
                >
                    {{ buttonText }}
                </button>
            </div>
        </div>
    </TransitionFade>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { modalStore } from "~/stores";

const modal = modalStore();
const { visible, icon, content, buttonText } = storeToRefs(modal);

function handleAccept() {
    callback.value();
}
</script>

<style lang="scss">
.modal-container {
    .close {
        &.visible {
            visibility: hidden;
        }
    }
}

@media screen and (max-width: 767px) {
    .modal-container {
        max-width: 60vw;
        .close {
            font-size: 20px;
        }
    }
}
</style>
