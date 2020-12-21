<template>
    <div id="User" class="Login">
        
            <div>
                 <button class="invert3" type="button" id="prof" v-on:click="Prueba">Mi perfil</button>
                 <button class="invert3" type="button" id="Docs" v-on:click="Docs">Documentos</button>   
            </div>
        
        <h1>¡Bienvenido <span>{{username}}</span>!</h1>
        

        <div style="text-align:center">
            <table style="width:60%" class="Data" align="center">
                <tr>
                    <th> NOMBRE</th>
                    <td><span>{{nombre}}</span></td>
                </tr>
                <tr>
                    <th>APELLIDO</th>
                    <td><span>{{apellido}}</span></td>
                </tr>
                <tr>
                    <th>CORREO ELECTRÓNICO</th>
                    <td><span>{{correo}}</span></td>
                </tr>
                
                <tr>
                    <th>ROL</th>
                    <td><span>{{rol}}</span></td>
                </tr>
                <tr>
                    <th>Celular</th>
                    <td><span>{{celular}}</span></td>
                </tr>
            </table>
            <button class="invert" type="button" id="Volver2" v-on:click="Volver">Volver</button>
        </div>
        
        
    </div>
</template>

<script>
    import axios from'axios';
    export default {
        name: "User",
        data: function(){
            return{
                username: "",
                apellido: "",
                correo: "",
                rol:"",
                celular:"",
                nombre:""
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
            axios.get("http://localhost:8000/user/leerUsuario/"+username)
                .then(response=> {
                    this.$router.push({name:"user", params:{username:username,
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
        Docs: function(){            
            //console.log(this.username)
            this.$router.push({name:"documents", params:{username:this.username,
                                                            apellido:this.apellido,
                                                            correo:this.correo,
                                                            nombre:this.nombre,
                                                            celular:this.celular,
                                                            rol:this.rol}})

        }

    }       
        
        
        
    }
</script>


<style type="text/css">
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
    .Data{
        background-color: #98C2EC;
        align-content: center;
        align-items: center;
        
    }
</style>