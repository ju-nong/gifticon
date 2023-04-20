<template>
    <TransitionSlide>
        <div v-if="visible">
            <Icon
                v-if="props.type === 'check'"
                name="material-symbols:check-circle-rounded"
            />
            <Icon
                v-else-if="props.type === 'danger'"
                name="majesticons:exclamation-circle"
            />
            {{ props.message }}
        </div>
    </TransitionSlide>
</template>

<script setup>
const props = defineProps({
    type: String,
    message: String,
});

const visible = ref(true);

onMounted(() => {
    // setTimeout(() => {
    //     visible.value = false;
    // }, 4000);
});
</script>

<style lang="scss"></style>
