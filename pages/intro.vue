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
            <li>
                <strong>뒤로가기도 하지 마세요!</strong>
                <span
                    >현재 로그인 정보가 Session에 저장되어 있어서 새로고침하면
                    안 돼요</span
                >
            </li>
            <li>
                <strong>기회는 한 번이에요!</strong>
                <span>생일선물을 여러개 받을 순 없겠죠?</span>
            </li>
            <li>
                <NuxtLink class="primary-button" to="/choose" replace>
                    🚩 시작!
                </NuxtLink>
            </li>
        </ul>
    </div>
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
                font-size: 16px;
            }
            span {
                font-size: 14px;
                color: #888;
                margin: 0.5rem 0 0 0.5rem;
            }
        }
    }
}
</style>
