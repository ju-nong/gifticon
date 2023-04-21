<template>
    <h1 class="title">💁 시험 안내</h1>
    <ul class="list-container">
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
