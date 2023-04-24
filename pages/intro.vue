<template>
    <h1 class="title">📄 꼭 기억해!</h1>
    <ul class="list-container py-4">
        <li>
            <strong>절대 새로고침을 하지 마!</strong>
            <span
                >방금 이름이랑 생년월일을 입력한 이후로, 더 이상 이용할 수
                없음</span
            >
        </li>
        <li>
            <strong>뒤로가기도 하지 마!</strong>
            <span
                >현재 로그인 정보가 Session에 저장되어 있어서 새로고침하면
                안돼</span
            >
        </li>
        <li>
            <strong>다른 앱으로 이동</strong>
            <span>Session이 종료돼서 기회가 날라갈 수 있어</span>
        </li>
        <li>
            <strong>기회는 한 번이야!</strong>
            <span>생일선물을 여러 개 받을 순 없잖아?</span>
        </li>
        <li>
            <NuxtLink class="primary-button" to="/choose" replace>
                🚩 시작!
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup></script>

<style lang="scss"></style>
