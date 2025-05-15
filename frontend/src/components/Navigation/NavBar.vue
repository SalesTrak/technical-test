<template>
    <nav>
        <ul>
            <li v-for="{ icon, label, active } of list" :class="{ active }" :key="label">
                <Icon class="button" :name="icon"/>
                &nbsp;
                {{ label }}
            </li>
        </ul>
    </nav>
</template>

<script setup>
import Icon from '../Icon/Icon.vue';

const list = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'location_on', label: 'Map' },
  { icon: 'monitoring', label: 'Reports' },
  { icon: 'groups', label: 'Teams' },
  { icon: 'contacts', label: 'Contacts', active: true },
];
</script>

<style lang="less" scoped>
nav {
    width: var(--navbar-width);
    background-color: var(--navbar-background);
    color: var(--navbar-color);
}

.active {
    color: var(--selected-color)
}

ul {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-left: 1rem;
    list-style-type: none;
}
</style>
