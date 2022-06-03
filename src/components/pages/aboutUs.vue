<template>
    <div class="container w-100 d-flex justify-content-center mt-5">
  <div class="card w-75" >
  <img src="../../Images/teaching-staff.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title d-flex justify-content-center">Teaching staff</h5>
    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum modi doloremque laboriosam quod sapiente voluptatum possimus veritatis blanditiis recusandae a repudiandae, quae nisi alias iusto! Voluptate possimus distinctio esse accusantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum vel itaque distinctio dolorem voluptatem vitae dignissimos omnis amet harum? Ipsum labore totam dolore quis eum quos esse beatae in dolorum?</p>
  </div>
</div>
</div>
<div class="text-center">
  <button class="btn btn-warning ms-3 mt-5" @click.prevent="back">Back to home page</button>
</div>
</template>

<script>
// import axios from 'axios'

    export default {
        name:'aboutUsComp',
        methods:{
            back(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>