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
            axios.post("https://expfles-sprint4.herokuapp.com/user/createUser/",datosJson)
                .then(response=> {
                    alert("Creado con exito");
                })
                .catch(error => {
                    alert("ERROR Servidor");
                }); 
        },   

        Volver: function(){
            this.$router.push({name:"index"})
        }
    }
}
</script>

<style>
    .Title{
        font-family: 'Times New Roman';
        color: #000000;
        font-size: 2rem;
        font-weight: bold;
        display: block;
    }
    .adf{
        text-align: left;
        position: initial;
        margin: 2rem;
        align-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-color: #ffffff;
        
    }
    
    .coment{
        font-family: 'Times New Roman';
        color: #000000;
        font-size: 2rem;
       
        display: block;
        align-items: center;
        align-self: center;
        align-content: center;
        margin-bottom: 1rem ;
        
    }
    .Login{
        background-color: #fafafa;
        margin: 2rem;
        padding: 3rem;
        border-radius: 50px;   
        border: 2px solid #000000;
        /* IMPORTANTE */
        text-align: center;
    }

    .Campos{
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
    .Campos_1{
    border-radius: 20px;
    border: 1px solid #082e55;
    background-color: #ffffff;
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;    
    }
    .Campos_2{
    border-radius: 20px;
    border: 1px solid #082e55;
    background-color: #ffffff;
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;    

    }
    .button {
        border-radius: 20px;
        border: 1px solid #009345;
        background-color: #009345;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform .1s ease-in;  
    }
    button.invert {
        border-radius: 20px;
        border: 1px solid #082e55;
        background-color: #082e55;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform .1s ease-in;
    }
</style>