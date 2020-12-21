<template>
    <div id="User" class="Login">
        
            <div>
                 <button class="invert3" type="button" id="prof" v-on:click="Prueba">Mi perfil</button>
                 <button class="invert3" type="button" id="Docs" v-on:click="Docs">Documentos</button>  
                  
            </div>
        
        <h1>¡Bienvenido <span>{{username}}</span>!</h1>

        <div class="Barra">
            <input type="text" placeholder="buscar" required>
            <button class="invert" type="button" id="search" v-on:click="Search">Buscar</button>
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
    export default {
        name: "Documents",
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
        methods: {
        Prueba: function(){
            this.$router.push({name: "user"})
                
        },
        Volver: function(){
            this.$router.push({name: "index"})
                
        },
        Docsfunction(){
            this.$router.push({name: "documents"})
                
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