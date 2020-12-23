<template>
    <div id="User" class="Login">
        
            <div>
                 <button class="invert3" type="button" id="prof" v-on:click="Prueba">Mi perfil</button>
                 <button class="invert3" type="button" id="Docs2" v-on:click="Docs2">Documentos</button>  
                  
            </div>
        
        <h1>¡Bienvenido <span>{{username}}</span>!</h1>

        <div class="Barra">
            <input type="text" placeholder="buscar" id="palabraclave" name ="palabraclave" >
            <button class="invert" type="button" id="search" v-on:click="SearchDoc" >Buscar</button>
        </div>
        

        <div style="text-align:center">
            <table style="width:60%" class="Data2" align="center">
                <tr>
                    <th> NOMBRE</th>
                    <th>FECHA DE SUBIDA</th>                    
                    <th>FECHA DE CADUCIDAD</th>
                    <th>ARCHIVO</th>
                </tr>
                <tbody id="Mis_Docs">
                    <tr v-for="na in archivos" >
                        <td>{{ na.file_name }}</td>
                        <td>{{ na.data_upload}}</td>
                        <td>{{ na.date_expired}}</td>
                        <td>{{ na.file_uploaded}}</td>
                    </tr>
                </tbody>
                
            </table>
            <button class="invert" type="button" id="Volver2" v-on:click="Volver">Volver</button>
        </div>
        
        
    </div>
</template>

<script>

import axios from "axios";
    export default {
        name: "Documents",
        data: function(){
            return{
                username: "",
                apellido: "",
                correo: "",
                rol:"",
                celular:"",
                nombre:"",
                archivos: []
                /*a1:"",
                a2:"",
                a3:"",
                a4:""*/
            }
        },
        created:function(){
            this.username = this.$route.params.username
            this.apellido = this.$route.params.apellido
            this.correo = this.$route.params.correo
            this.nombre = this.$route.params.nombre
            this.rol = this.$route.params.rol
            this.celular = this.$route.params.celular
            
        },
        methods: {
        Prueba: function(){
            axios.get("https://expfles-sprint4.herokuapp.com/user/leerUsuario/"+this.username)
                .then(response=> {
                    this.$router.push({name:"user", params:{username:this.username,
                                                            apellido:response.data.apellido,
                                                            correo:response.data.correo,
                                                            nombre:response.data.nombre,
                                                            celular:response.data.celular,
                                                            rol:response.data.rol}})
                })
                .catch(error => {
                    alert("ERROR Servidor");
                });
                
        },
        Volver: function(){
            this.$router.push({name: "index"})
                
        },
        Docs2:function(){
            this.$router.push({name: "documents"})
                
        },
        SearchDoc: function(){
            var keyword = document.getElementById("palabraclave").value;

            var jsonfile = {
                keyword_s: keyword,
                user_auth: this.rol
            };
            console.log(jsonfile)

            
            /*var password = document.getElementById("fpassword").value;*/
            axios.put("https://expfles-sprint4.herokuapp.com/user/Buscar",jsonfile)
                .then(response=>{
                    console.log(response.data);
                    this.archivos = response.data;
                    /*this.a1=(response.data[0].file_name)
                    this.a2=(response.data[0].data_upload)
                    this.a3=(response.data[0].date_expired)
                    this.a4=(response.data[0].file_uploaded)*/


                    
                })
                .catch(error => {
                    alert("ERROR Servidor");
                    console.log(error.data)
                });
            //console.log(Archivos)            
        }
    }    
    }
    
</script>


<style >
    .Barra {
       width: 1000 px;   
       height: 60px;
       padding: 0 20px;

    }
    .Barra input{
       font-family: 'Times New Roman';
        border-radius: 20px;
        border: 1px solid #082e55;
        background-color: #ffffff;
        color: #000000;
        font-size: 1.5rem;
        margin-left: 4rem;
        font-weight: bold;
        padding: 10px auto;
        letter-spacing: 0.1px;
        cursor: pointer;
        transition: transform .1s ease-in;  

    }
    table,th,td{
        border: 1px solid black;
        align-content: center;
        align-items: center;
        border-collapse: collapse;  
    }
    th,td{
        padding: 10px;
        
    }
    th{
        text-align: left;
    }
    .Data2{
        background-color: #ffffff;
        align-content: center;
        align-items: center;
        
    }
</style>