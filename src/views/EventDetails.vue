<template>
    <div v-if="singleEvent">
    <h1>{{ singleEvent.name }} </h1>
    <p> @ {{singleEvent.date }} @  {{ singleEvent.time }}</p>
    </div>
    <div v-else> Loading...</div>
</template>

<script>
import EventService from '../Services/EventService';
export default {
    props:['id'],
    data(){
        return {
            singleEvent:null
        }
    },
    created(){
        EventService.getEvent(this.id)
        .then(res =>{
            this.singleEvent = res.data;
        })
        .catch(err=>console.log('error',err))
    }
}
</script>