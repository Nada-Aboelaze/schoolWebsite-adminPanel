<template>
    <div>
<h1>Add Students</h1>
    </div>
    
<form @submit.prevent="AddStudent">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="first_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="last_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="age">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Grade</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="grade">
  </div>
  <button type="submit" class="btn btn-primary left" @submit.prevent="">Submit</button>
  <button class="btn btn-warning ms-3 left" @click.prevent="back">Back to home page</button>

</form>
    
</template>

<script>
import axios from 'axios'
    export default {
        name:'addStudent',
        data(){
            return{
                first_name:'',
                last_name:'',
                age: '',
                grade:''
            }
        }, 
        methods:{
            AddStudent(){
               axios.post('http://localhost:3000/students',{
                   first_name:this.first_name,
                   last_name:this.last_name,
                   age:this.age,
                   grade:this.grade
               }) 
               .then(res =>{
                   console.log(res.data)
                   this.$router.push('/allStudents')
               })
               .catch(err=>{
                   console.log(err)
               })
            },
            back(){
                this.$router.push('/')
    }
        }
    }
</script>

<style scoped>
input{
    width: 500px;
    margin-left: 50px;
}

.form-label{
    text-align: left;
    margin-left: 50px;
}

.left{
    margin-left: 50px;
}
h1{
    text-align: center;
    }
</style>