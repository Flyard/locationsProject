<template>
    <div class="main_container">
        <h1>Edit a location</h1>
        <form>
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
                type="Number"
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
                <button type="button" class="button" v-on:click="fetchData()">Save</button>
                <button type="button" class="button" v-on:click="goBack()">Go back</button>
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
            filmProducerName: '',
            endDate: '',
            filmName: '',
            district: '',
            sourcelocationId: '',
            filmDirectorName: '',
            address: '',
            startDate: '',
            year: '',
            username: '',
        }
    },

    methods: {
        goBack() {
            localStorage.removeItem("locationId");
            this.$router.push('/locations');
        },
        async fetchData() {
    this.token = localStorage.getItem("token");
    const locationId = localStorage.getItem("locationId");
    const headers = {
        "Authorization": "Bearer " + this.token
    }

    const existingData = await axios.get(url + locationId,{headers})

    const updatedData = {
        ...existingData.data,
        filmName: this.filmName ? this.filmName : existingData.data.filmName,
        filmType: this.filmType ? this.filmType : existingData.data.filmType,
        filmProducerName : this.filmProducerName ? this.filmProducerName : existingData.data.filmProducerName,
        endDate : this.endDate ? this.endDate : existingData.data.endDate,
        district : this.district ? this.district : existingData.data.district,
        sourcelocationId : this.sourcelocationId ? this.sourcelocationId : existingData.data.sourcelocationId,
        filmdDirectorName : this.filmDirectorName ? this.filmDirectorName : existingData.data.filmdDirectorName,
        address : this.address ? this.address : existingData.data.address,
        startDate : this.startDate ? this.startDate : existingData.data.startDate,
        year : this.year ? this.year : existingData.data.year
    }
    axios.patch(url + locationId, updatedData, { headers })
        .then((res) => {
            console.log(this.year);
            console.log(res.data);
            alert('Location edited !')
        })
        .catch((error) => console.error(error.response.status))
    localStorage.removeItem("locationId");
}
    }

}
</script>

<style>
@import './css/addLocation.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
