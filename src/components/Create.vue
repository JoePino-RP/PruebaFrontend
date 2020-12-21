<template>
    <div>
        <div id="CreateFull" class="Login">        
        <div id="Create">
            <div class="Title"><h1>Creación de Usuarios</h1></div>
            <form >     
                <table class="adf">
                    <tr >           
                        <th><label class="coment" for="fuser">Usuario</label></th>
                        <th><input type="text" placeholder="Usuario" id="fuser" name="fuser" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fname">Nombre</label></th>
                        <th><input type="text" placeholder="Jhon" id="fname" name="fname" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="flast">Apellido</label></th>
                        <th><input type="text" placeholder="Smith" id="flast" name="flast" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="femail">Correo electrónico</label></th>
                        <th><input type="email" placeholder="JSmith@hotmail.com" id="femail" name="femail" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="frol">ROL</label></th>
                        <th><input type="text" placeholder="admin" id="frol" name="frol" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fcel">Celular</label></th>
                        <th><input type="number" placeholder="3123456789" id="fcel" name="fcel" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fpass">Contraseña</label></th>
                        <th><input type="password" placeholder="********" id="fpass" name="fpass" class="Campos"><br></th>
                    </tr>
                    
                </table>
                <button class="invert" type="button" id="Volver" v-on:click="Volver">Volver</button>
                <button class="invert" type="button" id="signIn" v-on:click="RegisterUser">Registrar</button>
                
            </form>
            </div>         
        </div>    
        <div class="footer">  
            <h2>      
                ©2020 por ExpFiles.
            </h2>
        </div>
    
</div>

</template>

<script>
import axios from "axios";
export default {
    name: "Create",
    data: function(){
        return{username: "none",
                password: "none",
                nombre: "none",
                apellido: "none",
                correo: "none",
                celular: 0,
                rol: "none"
                }
    },

    methods:{
        RegisterUser: function(){
            var datosJson = {
                username: document.getElementById("fuser").value,
                password: document.getElementById("fpass").value,
                nombre: document.getElementById("fname").value,
                apellido: document.getElementById("flast").value,
                correo: document.getElementById("femail").value,
                celular: document.getElementById("fcel").value,
                rol: document.getElementById("frol").value
            };
            console.log(datosJson)
            axios.post("https://expfiles-s3.herokuapp.com/user/createUser/",datosJson)
                .then(response=> {
                    alert("Creado con exito");
                    })
                .catch(error => {
                    alert("ERROR Servidor");
                    }); 
        },

        Volver: function(){
            this.$router.push({name:"login"})
        }
    }
}
</script>

<style>

</style>