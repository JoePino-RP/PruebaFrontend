<template>
    <div id="User" class="Login">
        
            <div>
                 <button class="invert3" type="button" id="prof" v-on:click="Prueba">Mi perfil</button>
                 <button class="invert3" type="button" id="Docs2" v-on:click="Docs2">Documentos</button>  
                  
            </div>
        
        <h1>¡Bienvenido <span>{{username}}</span>!</h1>

        <div class="Barra">
            <form >
                <label class="coment" for="fdoc">Nombre</label>
            <input type="text" placeholder="buscar" id="fdoc" name="fdoc" class="Campos"><br>
            <button class="invert" type="button" id="search" v-on:click="SearchDoc" >Buscar</button>
            </form>
        </div>
        

        <div style="text-align:center">
            <table style="width:60%" class="Data2" align="center">
                <tr>
                    <th> NOMBRE</th>
                    <th>FECHA DE SUBIDA</th>                    
                    <th>FECHA DE CADUCIDAD</th>
                    <th>ARCHIVO</th>
                </tr>
                <tr>
                    <td>nombre 1</td>
                    <td>2020-12-12</td>
                    <td>2021-12-21</td>
                    <td>img</td>
                </tr>
                
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
                file_name:"",
                data_upload:"",
                data_expired:"",
                file_uploaded:""
            }
        },
        created:function(){
            this.username = this.$route.params.username
            this.apellido = this.$route.params.apellido
            this.correo = this.$route.params.correo
            this.nombre = this.$route.params.nombre
            this.rol = this.$route.params.rol
            this.celular = this.$route.params.celular
            this.file_name = this.$route.params.file_name
            this.data_upload = this.$route.params.data_upload
            this.data_expired = this.$route.params.data_expired
            this.file_uploaded = this.$route.params.file_uploaded
        },
        methods: {
        Prueba: function(){
            axios.get("http://localhost:8000/user/leerUsuario/"+this.username)
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
            var keyword = document.getElementById("fdoc").value;

            var jsonfile = {
                keyword_s: keyword,
                user_auth: this.rol
            };
            console.log(jsonfile)

            
            /*var password = document.getElementById("fpassword").value;*/
            axios.get("http://localhost:8000/user/Buscar",jsonfile)
                .then(response=>{
                    alert("Picadura de la cobra gay")
                })
                .catch(error => {
                    alert("ERROR Servidor");
                }); 
                
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