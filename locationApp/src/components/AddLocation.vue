<template>
    <div class="main_container">
        <h1>Add a location</h1>
        <form>
            <label>Film name: </label> <br>
            <input 
                class="input"
                type="text"
                placeholder="Clem"
                v-model='filmName'
            >
            <br> <br>
            <label>Type: </label> <br>
            <input 
                class="input"
                type="text"
                placeholder="Long métrage, série, ..."
                v-model='filmType'
            >
            <br> <br>
            <label>Producer: </label> <br>
            <input 
                class="input"
                type="text"
                placeholder="CURIOSA FILMS"
                v-model='filmProducerName'
            >
            <br> <br>
            <label>Year: </label> <br>
            <input 
                class="input"
                type="number"
                placeholder="2020"
                v-model='year'
            >
            <br> <br>
            <label>Start date:  </label> <br>
            <input 
                class="input"
                type="date"
                placeholder="2020-09-04"
                v-model='startDate'
            >
            <br> <br>
            <label>End date: </label> <br>
            <input 
                class="input"
                type="date"
                placeholder="2020-09-08"
                v-model='endDate'
            >
            <br> <br>
            <label>Address: </label> <br>
            <input 
                class="input"
                type="text"
                placeholder="12 rue francis ponge, 75019 Paris"
                v-model='address'
            >
            <br> <br>
            <label>Location ID: </label> <br>
            <input 
                class="input"
                type="text"
                placeholder="2020-434"
                v-model='sourcelocationId'
            >
            <br>
            <div class="button-div">
                <button type="button" class="button" v-on:click="addLocation()">Add</button>
                <button type="button" class="button" v-on:click="$router.push('/locations')">Go back</button>
            </div>

        </form>
    </div>
</template>

<script>
const url = 'https://locationsproject-backend.onrender.com/locations/';

import axios from 'axios';
export default {
    data () {
        return {
            _id: 0,
            filmType: '',
            filmProducerName:'',
            endDate: '',
            filmName: '',
            district: '',
            sourcelocationId: '',
            filmDirectorName: '',
            address: '',
            startDate: '',
            year: '',
            username: ''
        }
    },
    methods: {
       async addLocation() {
            this.token = localStorage.getItem("token");
            this.username = localStorage.getItem("user");
            const headers= {
                    "Authorization": "Bearer " + this.token
                }
            let req = await axios.post(url, {
                
                    filmName: this.filmName,
                    filmProducerName : this.filmProducerName,
                    endDate : new Date(this.endDate),
                    district : this.district,
                    sourcelocationId : this.sourcelocationId,
                    filmDirectorName : this.filmDirectorName,
                    address : this.address,
                    startDate : new Date(this.startDate),
                    year : this.year
                
            }, {headers})

                .then((res) => {
                    alert('Location successfully added !');
                    console.log(res.data)
                    this.$router.push('/locations');
                })
        }
    }
}
</script>

<style>
@import './css/addLocation.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
