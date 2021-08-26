<template>
    <div class="clearAllContainer" @click="clearTodo">
        <span class="clearAllBtn">Clear All</span>
    </div>
</template>

<script>
export default {
    methods:{
        clearTodo(){
            this.$emit("removeAll");
        }
    }
};
</script>

<style scoped>
    .clearAllContainer{
        width: 8.5rem; 
        height: 50px; 
        line-height: 50px; 
        background-color: red; 
        border-radius: 5px;
        margin: 0 auto; 
        cursor: pointer; 
    }

    .clearAllBtn{
        color: white; 
        display: block; 
    }
</style>