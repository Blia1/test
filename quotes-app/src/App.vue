<template>
    <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Quotes from './components/Quotes.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        Quotes,
    }
}
</script>

<style>

</style>
