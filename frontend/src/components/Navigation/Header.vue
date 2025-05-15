<template>
    <header>
        <h1>Contacts</h1>
        <div class="grow"></div>
        <Icon name="search" class="button" />
        <Icon name="location_on" class="button" />
    </header>
</template>

<script setup>
import Icon from '../Icon/Icon.vue';
</script>

<style scoped>
header {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    border-bottom: var(--border);
}
</style>
