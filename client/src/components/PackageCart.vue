<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import packageCounter from './productCounter.vue'
import axios from 'axios'
export default {
    components: {packageCounter},
    data() {        
        return {
            package: null,
        };
    },
    created() {
        axios
            .get("http://localhost:5000/getAllPackage")
            .then(response => (this.package = response.data));
    },
    methods:{
        addCartProduct(event){
            var Cartdesc = document.getElementById('cart-desc'+event.currentTarget.id)
            var Cartimg = document.getElementById('cart-img'+event.currentTarget.id)
            var Cartcounter = document.getElementById('cart-counter'+event.currentTarget.id)
            var Cartprice = document.getElementById('cart-price'+event.currentTarget.id)
            
            this.$store.state.basketList.push({
                packageid: event.currentTarget.id,
                packageName: Cartdesc.getElementsByTagName('h1')[0].innerText,
                creditlimit: Cartdesc.getElementsByTagName('h3')[0].innerText,
                price: Cartprice.innerText,
                detail: Cartdesc.getElementsByTagName('p')[0].innerText,
                imageurl: Cartimg.getAttribute('src'),
                count: Cartcounter.getElementsByTagName('span')[0].innerText
            })
            
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: "Ürün sepete eklendi",
                    showConfirmButton: false,
                    timer: 1500
                });
            console.log(this.$store.state.basketList.length)
        },
    }
}
</script>
    
<template>
    
    <div class="cart" v-for="value in package">
        <div class="cart-img">
            <img :id="'cart-img'+ value._id" src="../assets/images/campainJersey23.webp" alt="campaing">
        </div>
        <div :id="'cart-desc'+ value._id" class="cart-desc">
            <h1>{{value.name}}</h1>
            <h3>{{value.credit}}</h3>
            <p>{{value.description}}</p>
            <packageCounter :id="'cart-counter'+ value._id"/>
        </div>
        <div class="cart-select">
            <span :id="'cart-price'+ value._id">{{value.price}} tl</span>
            <button :id="value._id" @click="addCartProduct($event)" class="btn-select">Ekle</button>
        </div>
        
    </div>
</template>

<style lang="scss">
.cart {
    display: flex;
    border: 1px solid #cfcfcf;
    padding: 15px;
    border-radius: 15px;
    background-color: #151c27;
    color: #fff;

    .cart-desc {
        padding: 15px;
        width: 100%;

        h1 {
            margin-bottom: 5px;
        }
    }

    .cart-img {
        width: 150px;

        img {
            width: 100%;
            height: auto;
        }
    }

    .cart-select {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 150px;

        button {
            padding: 5px 20px;
            background-color: #fff;
            color: green;
            font-weight: bold;
            border: 1px solid #fff;
            transition: .3s;
            border-radius: 5px;

            &:hover {
                background-color: green;
                color: #fff;
            }
        }

    }
}
</style>
    