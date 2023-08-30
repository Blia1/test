<template>
    <router-view />
</template>

<script>
import HelloWorld from './/view/pages/MainPage/HelloWorld.vue';
import Animation from './components/HomeScreenAnimation.vue';
import Navbar from './components/Navbar.vue';
import SeeMoreBtn from './components/SeeMoreBtn.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        Animation,
        Navbar
    }
}
</script>

<style></style>
