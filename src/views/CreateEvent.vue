<template>
    <h3> Create a Event </h3>

    <form @submit.prevent="handleSubmit">
    
        <BaseSelect label="Select a Type" :optionsData="options" v-model="event.type" />
        <!-- <label for="type">Type : </label>
    <select v-model="event.type" id="type" placeholder="Select a Type"  class="field">
        <option v-for="(option,index) in options" :key="index" :value="option.name">
        {{ option.name }}</option>
    </select> -->
    
        <BaseInput label="Title" v-model="event.title" type="text" />
    <!-- <label for="title">Title : </label>
    <input type="text" id="title" v-model="event.title" required placeholder="Title" class="field" /> -->
    
    
        <BaseInput label="Description"  type="text" v-model="event.description"/>
    <!-- <label for="description">Description : </label>
    <input type="text" v-model="event.description" placeholder="Descriptions" class="field"/> -->
    
    
        <BaseInput label="Location" v-model="event.location" type="text" />
    <!-- <label for="location">Location : </label>
    <input type="text" v-model="event.location" class="field" placeholder="Location" /> -->
    <h4> Extra </h4>
    <BaseCheckBox v-model="event.extra.food" label="Food"/>
    <BaseCheckBox v-model="event.extra.music" label="Music"/>

    <h4>Are you Allow Pets ?</h4>
    <BaseRadio :value="1" v-model="event.pets" label="Yes" name="pets"/>
    <BaseRadio :value="0" v-model="event.pets" label="No" name="pets"/>

    <div class="btn">
        <button :disabled="disabledBtn" :class="{'btn-disable': disabledBtn }" type="submit">Submit</button>
    </div>

</form>



</template>

<script>
import BaseInput from '../components/BaseInput.vue'
import BaseSelect from '../components/BaseSelect.vue'
import BaseCheckBox from '@/components/BaseCheckBox.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import EventService from '@/Services/EventService'
export default {
    components:{
        BaseInput,
        BaseSelect,
        BaseCheckBox,
        BaseRadio,
    },
    data(){
        return {
            event:{
                title:null,
                description: null,
                type: null,
                location: null,
                extra:{
                    food:false,
                    music: false,
                },
                pets: 1,

            },
            options:[
                {id:1,name:'Marathon'},
                {id:2, name:'Music'},
                {id:3, name:'Dance'},
                {id:4, name:'Yoga'}
            ],
            
        }
        
    },
    computed:{
        disabledBtn(){
            if(!this.event.type || !this.event.title ){
                
                return true
            }else {

                return false
            }
        }
    },
     methods:{
        handleSubmit(){
            console.log(this.event,'Events')
            const payload = {
                id: Math.floor(Math.random()*100) +1,
                title:this.event.title,
                type:this.event.type,
                description:this.event.description,
                location: this.event.location,
                extra: this.event.extra,
                pets:this.event.pets
            }
            EventService.postEvent(payload).then(response=>{
                if(response){
                    alert('Event created successfully!')
                    this.$router.push({name:'HomePage'})
                }
            }).catch(err=> console.log(err,'Error'))
    }
    
}
}
   
</script>
<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 50%;
    height: 20%;
    border: 2px solid gray;
    border-radius: 10px;
    gap: 10px;
    padding: 15px;
}

.field{
    padding:10px;
    margin-left: 10px;
    width: 100%;
    
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    background-color: cadetblue;
    color: #fff;
    font-size: large;
    font-weight: bold;
    border: 2px solid cadetblue;
    cursor: pointer;
    border-radius: 40px;
    padding:10px;
}
button:hover{
    padding: auto;
 box-shadow: 10px 5px 5px burlywood;
}
.btn-disable{
    background-color: grey;
    color: #111;
}
.btn-disable:hover{
    box-shadow: 10px 5px 5px gray;
}
</style>