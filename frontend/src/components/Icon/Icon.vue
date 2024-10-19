<template>
    <span class="icon">
        <slot> {{ name }}</slot>
    </span>
</template>

<script setup>
defineProps({
  name: String,
});
</script>

<style scoped>
span {
    user-select: none;
}

.button {
    --size: 2rem;
    font-size: var(--size);
    line-height: 1rem;
    display: inline-block;
    transform: translateY(calc(var(--size) / 4));
}
</style>
