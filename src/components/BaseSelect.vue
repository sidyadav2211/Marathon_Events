<template>
    <label >{{ label }} : </label>
    <select 
    v-bind="{
        ...$attrs,
    onchange: (event)=>$emit('update:modelValue',event.target.value)}
    " :value="modelValue"
    :placeholder="label" class="field">
    <option v-for="(option,index) in optionsData" :key="index" :value="option.name">
    {{ option.name }}</option>
    </select>
</template>

<script>
export default {
    props:{
        label:{
            type:String,
            default:'',
        },
        modelValue:{
            type:[String, Array],
            default:'',
        },
        optionsData:{
            type: Array,
        }

    }
}

</script>
<style scoped>
.field{
    padding:10px;
    margin-left: 10px;
    width: 40%;
    
}
</style>