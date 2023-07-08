<template>
  <div class="event-cart" :style="{ backgroundColor : event.color }">
    <Router-link :to="{name: 'EventDetails', params:{id : event.id}}">
    <span>@ {{ event.time }} {{ event.date }}</span> 
    <h4>{{ event.name }}</h4>
    </Router-link>
  </div>
</template>

<script>

export default {
  props: {
    event: Object,
  },
  data(){
    return {
      data: null,

    }

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: white;
  text-decoration: none;
}
.event-cart{
  height: 100px;
  width: 300px;
  font-size: medium;
  border: 2px solid gray;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  padding: 20px;
}
.event-cart:hover{
   box-shadow: 10px  5px 5px #888;
   color: #999;
   background-color: tomato;
   
}
</style>
