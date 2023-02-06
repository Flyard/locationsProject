<template>
    <Home />
</template>

<script>
    import Register from './components/Register.vue';
    import Login from './components/Login.vue';
    import Locations from './components/Locations.vue';
    import Landing from './components/Landing.vue'
    import Home from './components/Home.vue'
    export default {
        name: 'App', 
        components: {
            Register, 
            Login,
            Locations,
            Landing,
            Home
        } 
    }
</script>