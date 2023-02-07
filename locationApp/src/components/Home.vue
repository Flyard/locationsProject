<template>
    <div class="container">
        <h1>Welcome on Location app !</h1>
        <p>Please <span>Register</span> or <span>Login</span> to access the app</p>

        <button type="button" class="butt" v-on:click="this.$router.push('/register')">Register</button>
        <button type="button" class ="butt" v-on:click="this.$router.push('/login')">Login</button>

    </div>
   


</template>

<style>
@import './css/home.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>