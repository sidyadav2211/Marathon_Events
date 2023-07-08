<template>
    <div class="cards">

        <h1>Marathon Events</h1>

        <EventCart v-for="(event, index) in events" :key="index" :event="event" ></EventCart>
    </div>
</template>

<script>
import EventCart from '../components/EventCart'
import EventService  from '../Services/EventService'
export default {
    components:{
        EventCart,
    },
    data(){
        return {
            events: null,
        }
    },
    created(){
        EventService.getEventList()
        .then(res=> {
            this.events = res.data;
        })
        .catch(err=> console.error(err))
    }

   
    
}
</script>
<style scoped>
h3{
    
}
.cards{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>