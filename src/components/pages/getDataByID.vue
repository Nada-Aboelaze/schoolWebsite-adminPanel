<template>
    <div class="container">
        <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">{{first_name +" " +last_name}}</h5>
      <p class="card-text">{{"student's age is "+age}}</p>
      <p class="card-text">{{"student's grade is "+grade}}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>


    </div>
    <div class="text-center">
  <button class="btn btn-warning ms-3" @click.prevent="back">Back</button>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'getDataByIDComp',
        created(){
            this.getStudentByID()
        },
        data(){
            return{
                id:'',
                first_name:'',
                last_name:'',
                age: '',
                grade:''
            }
        },
        methods:{
            getStudentByID(){
                this.id = this.$route.params.id
                axios.get(`http://localhost:3000/students?id=${this.id}`)
                .then((res)=>{
                    console.log(res.data)
                    for (let i = 0; i < res.data.length; i++) {
                    this.first_name = res.data[i].first_name;
                    this.last_name = res.data[i].last_name;
                    this.age = res.data[i].age;
                    this.grade = res.data[i].grade;

                     }
                })
                .catch((err)=>{
                    console.log(err)
                })


            },
            back(){
                this.$router.push('/allStudents')
            }
        }
    }
</script>

<style scoped>
.card{
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 10px;
}
</style>