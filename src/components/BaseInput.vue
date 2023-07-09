<template>
    <label >{{ label }} : </label>
    <input :bind="$attrs" :value="modelValue" v-bind="$attrs
    " class="field" @input="$emit('update:modelValue',$event.target.value)"
    :placeholder="label" />

</template>

<script>
export default {
    props:{
                label:{
                    type:String,
                    default:''
                },
                modelValue:{
                    type: [String, Number],
                    default:''
                }
            },
    data(){
        return {
            
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