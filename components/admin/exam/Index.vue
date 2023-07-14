<template>
    <div class="admin-container-main-exam">
        <ul>
            <AdminExamItem
                v-for="(exam, index) in data.item"
                :key="index"
                :exam="exam"
                :index="index"
            />
        </ul>
    </div>
</template>

<script setup>
import { examStore } from "~/stores";
import { storeToRefs } from "pinia";

const exam = examStore();
const { data } = storeToRefs(exam);
</script>

<style lang="scss">
.admin-container-main-exam {
    > ul {
        > li {
            display: flex;
            flex-direction: column;
            &:not(&:last-child) {
                border-bottom: 1px solid #eee;
            }

            &:not(&:first-child) {
                padding-top: 0.5rem;
            }

            > h1 {
                > span {
                    color: rgb(26 136 233);
                    font-weight: 700;
                    font-size: 18px;
                    margin-right: 0.25rem;
                }
            }
            > ul {
                padding: 0.5rem 0 0.5rem 1rem;
                > li {
                    span {
                        margin-right: 0.25rem;
                    }
                }
            }
            > p {
                padding: 0 0 0.5rem 0.5rem;
            }
        }
    }
}
</style>
