<template>
    <div id="User" class="Login">
        <p>
            <a href="./components/User.vue">Mi perfil</a>|
            <a href="./components/Login.vue">Gestión documental</a>|
            <a href="./components/User.vue">Notificaciones</a>|
            <a href="./components/Login.vue">Estadísticas</a>
        </p>
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
        
        <div class="footer">  
             <h2>      
              ©2020 por ExpFiles.
            </h2>
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
        
        methods:{            
            Volver: function(){
                this.$router.push({name:"login"})
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