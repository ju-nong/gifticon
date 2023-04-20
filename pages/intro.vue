<template>
    <h1 class="title">📄 꼭 숙지하세요!</h1>
    <div class="intro-container">
        <ul class="py-4">
            <li>
                <strong>절대 새로고침을 하지 마세요!</strong>
                <span
                    >방금 이름이랑 생년월일을 입력한 이후로, 더이상 이용이
                    불가능해요</span
                >
            </li>
        </ul>
    </div>
    <NuxtLink to="/">메인</NuxtLink>
</template>

<script setup>
import { userStore } from "~/stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { block } = storeToRefs(user);

onMounted(() => {
    // console.log(block.value);
});
</script>

<style lang="scss">
.intro-container {
    ul {
        display: flex;
        flex-direction: column;

        row-gap: 2rem;

        li {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 1.5rem;
            }
            span {
                margin: 0.5rem 0 0 0.5rem;
            }
        }
    }
}
</style>
