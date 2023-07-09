<template>
<span>
<input type="checkbox"
:value="modelValue"
@change="$emit('update:modelValue',$event.target.checked)">
<label>{{ label }}</label>
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
            type:Boolean,
            default:false,
        }
    }
}
</script>