<template>
    <div class="card">
      <div class="card-title" v-on:click="toogleDetails()">{{ filmName }}</div>
      <div class="card-body">{{ filmDirectorName }}</div>
      <div class="card-details" v-if="showDetails">
        <p>id: {{ _id }}</p>
        <p>Type: {{ filmType }}</p>
        <p>Producer: {{ filmProducerName }}</p>
        <p>Year: {{ year }}</p>
        <p>Start date: {{ startDate }}</p>
        <p>End date: {{ endDate }}</p>
        <p>Address: {{ address }}</p>
        <p>District: {{ district }}</p>
        <p>Source location ID: {{ sourcelocationId }}</p>
        <div class="button-align">
            <button type="button" class="card-button" v-on:click="goEdit()">Edit</button>
            <button type="button" class="card-button" v-on:click="doDelete()">Delete</button>
        </div>
      </div> 
    </div>

  </template>
  
  <script>
  import axios from 'axios'
  const url = 'http://localhost:3000/locations'
  export default {
    name: 'LocationsCards',
    props: [
        '_id',
        'filmType',
        'filmProducerName',
        'endDate',
        'filmName',
        'district',
        'sourcelocationId',
        'filmDirectorName',
        'address',
        'startDate',
        'year'
    ],
    data() {
        return {
            showDetails: false,
            editing: false
        }
    },

    methods: {
        goEdit() {
          localStorage.setItem('locationId', this._id);
          console.log('added')
          this.$router.push('/edit')
        },
        toogleDetails() {
            this.showDetails = !this.showDetails;
        },
        async doDelete() {
            this.token = localStorage.getItem("token");
            let req = await axios.delete(url+'/'+this._id, {
              headers: {
                    "Authorization": "Bearer " + this.token
                }
            })
 
                .then((res) => {
                  alert('Deleted');
                  window.location.reload();
                })
                .catch((error) => {
                  if(error.response.status === 403) {
                    alert('You are not authorized to do this action.')
                  }
                })
        },

    }

  };
  </script>

<style>
@import './css/cards.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
</style>
