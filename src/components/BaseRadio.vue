<template>
<span>
<input type="radio" :checked="modelValue === value" :value="value"
    @change="$emit('update:modelValue',value)"/>
    <label >{{ label }}</label>
    </span>
</template>

<script>
export default {
    props:{
        label:{
            type:String,
            default:'',
        },
        modelValue:{
            type:[String,Number],

        },
        value:{
            type:[String, Number],
            required:true,
        }
    }
}
</script>