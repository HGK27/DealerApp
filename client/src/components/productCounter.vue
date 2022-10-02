<script>
export default{
    data(){
        return{
            packageCount:1
        }
    },
    methods:{
        increment() {
            this.packageCount += 1
        },
        decrement() {
            if(this.packageCount>1)
            this.packageCount -= 1
        }
    }
}
</script>
<template>
           <div class="packageCounter">
                <button @click="decrement" class="btn-count">-</button>
                <span>{{packageCount}}</span>
                <button @click="increment" class="btn-count">+</button>
            </div>
</template>
<style lang="scss">
.packageCounter{
        background: #fff;
        color:#000;
        padding:0 5px;
        border-radius: 5px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:10px 0;

        .btn-count{
            padding: 5px 10px;
            font-size: 25px;
            border: none;
            background: none;
        }
        span{
            font-size: 25px;
            padding: 5px 10px;
        }
    }
</style>