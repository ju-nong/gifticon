<template>
    <div
        class="exam-header-container w-full flex items-center justify-center py-2"
    >
        <ul class="flex items-center justify-center gap-x-10 relative">
            <li
                v-for="(_, index) in 3"
                :key="index"
                class="font-semibold text-center"
                :class="index === step ? 'active' : ''"
            >
                {{ index + 1 }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { examStore } from "~/stores";

const exam = examStore();
const { step } = storeToRefs(exam);
</script>

<style lang="scss">
.exam-header-container {
    ul {
        &::before {
            content: "";
            position: absolute;
            height: 2px;
            background-color: rgb(26 136 233);
            top: 50%;
            left: 0;
            width: 100%;
            z-index: -1;
        }
        li {
            color: rgb(26 136 233);
            border: 2px solid rgb(26 136 233);
            background-color: #fff;
            border-radius: 100%;
            font-size: 20px;
            width: 36px;
            line-height: 34px;

            &.active {
                color: #fff;
                background-color: rgb(26 136 233);
                font-weight: bold;
            }
        }
    }
}
</style>
