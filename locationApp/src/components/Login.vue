<template>
    <div class="container">
        <h1>Login</h1>
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
        <button type="button" class="button" v-on:click="login()">Login</button>
        <button type="button" class="button" v-on:click="$router.push('/')">Home</button>

    </form>
    </div>

</template>

<script>
    const url = 'http://localhost:3000/users/login';
    import axios from 'axios';

    export default {
        name: 'Login',
        data(){
            return {
                username: '',
                password: '',
                role: ''
            };
        },
        methods: {
            async login() {
                let sentData = await axios.post(url, {
                    username: this.username, 
                    password: this.password,
                })
                .then((res) => {
                    if(res.status === 200) {
                        try{
                            localStorage.setItem('token', res.data.jwt);
                            this.$router.push('/locations')
                        } catch{
                            console.log('failed to store in localStorage');
                        }
 
                        //this.$router.push('/locations');
                    }
                })
                .catch((res) => {
                    alert('Wrong credentials')
                })
            },  
        }
    }
</script>

<style>
@import './css/login.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
