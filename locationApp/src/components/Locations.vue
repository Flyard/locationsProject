<template>
    <div class="big_container">
        <div class="first_container">
            <h1 class="title">All locations</h1>
            <nav class="navbar">
                <button type="button" class="button" v-on:click="this.$router.push('/add')" v-if="checkAdmin()">Add a location</button>
                <button type="button" class="button" v-on:click="logout()">Logout</button>
            </nav>
        </div>
        <div class="cardContainer"> 
            <div class="second_container" v-for="locations in locations">
                <LocationsCards class="locationCard" 
                    :_id="locations._id"
                    :filmType ="locations.filmType"
                    :filmProducerName="locations.filmProducerName"
                    :endDate="locations.endDate"
                    :filmName="locations.filmName"
                    :district="locations.district"
                    :sourcelocationId="locations.sourcelocationId"
                    :filmDirectorName="locations.filmDirectorName"
                    :address="locations.address"
                    :startDate = "locations.startDate"
                    :year="locations.year" 
                />
            </div>
        </div>
        <p v-if="loading" class="loading">Loading...</p>
    </div>
</template>

<script>
import axios from 'axios';
import LocationsCards from './LocationsCards.vue';


    export default {
    name: "Locations",
    components: { 
        LocationsCards 
    },
    data() {
        return {
            token: "",
            index: 0,
            locations: [],
            page: 1,
            loading: false,

        };
    },
    created() {
        this.fetchData().then(totalItems => this.totalItems = totalItems);
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        checkAdmin() {
            if(localStorage.getItem("role") === "admin") return true;
            else return false;
        },
        logout() {
            try {
                localStorage.clear();
                this.$router.push("/");
            }
            catch {
                console.log("error");
            }
        },
        async fetchData() {
            this.token = localStorage.getItem("token");
            this.loading = true;
            let limit = 20;
            let offset = 0;
            let allData = [];
            
            while(true) {
                const url = `https://locations-project-back.onrender.com/locations?limit=${limit}&offset=${offset}`;
            let getLocations = await axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
                .then((res) => {
                    allData = allData.concat(res.data);
                    offset +=limit;
                    return res.data.totalItems;
            })
                .catch((res) => {
                    if(localStorage.getItem("token") === null) {
                        this.$router.push('/login');
                    }
                })
                this.locations = allData;
            this.loading = false;
            }


        },
        handleScroll() {
            if(this.loading) return;
            const bottom = document.documentElement.scrollHeight - window.scrollY === window.innerHeight;
            if (bottom && this.locations.length < this.totalItems) {
                this.page += 1;
                this.fetchData();
            }
        },

    },

} 

</script> 

<style>
@import './css/locations.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
