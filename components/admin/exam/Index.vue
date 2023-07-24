<template>
    <div class="admin-container-main-exam">
        <ul>
            <li v-for="(exam, index) in data.item">
                <AdminExamItem
                    :key="index"
                    :exam="exam"
                    :index="index"
                    @handleUpdateExam="handleUpdateExam"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { examStore } from "~/stores";
import { storeToRefs } from "pinia";

const exam = examStore();
const { data } = storeToRefs(exam);

function handleUpdateExam({ index, config }) {
    data.value.item[index] = { choice: -1, ...config };

    exam.updateDB("item", data.value.item);
}
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

            .exam-input {
                display: inline;
                outline: none;
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
