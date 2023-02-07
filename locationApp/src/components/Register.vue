<template>
    <div class="container">
        <h1>Register</h1>
        <form>
        <label>Username</label> <br> 
        <input 
            class="input"
            type="text"
            placeholder="username"
            v-model = 'username'
            required
        >
        <br> <br>
        <label>Password</label> <br> 
        <input 
            class="input"
            type="password"
            v-model = 'password'
            placeholder="password"
            required
        >
        <br> <br>
        <button type="button" class="button" v-on:click="register()">Register</button>
        <button type="button" class="button" v-on:click="$router.push('/')">Home</button>

    </form>
    <p>Already have an account?</p>
    <button type="button" class="button" v-on:click="$router.push('/login')">Login</button>
    </div>



</template>

<script>
    const url = 'http://localhost:3000/users/register';
    import axios from 'axios';

    export default {
        name: 'Register',
        data(){
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            async register() {
                let sentData = await axios.post(url, {
                    username: this.username, 
                    password: this.password
                })
                .then((res) => {$router.push('/login')})
                .catch((res) => {
                    alert('User already exists')
                })

            }
        }
    }

</script>

<style>
@import './css/login.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
