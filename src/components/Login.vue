<template>
    <div>
        <div id="LoginFull" class="Login">        
        <div id="Login">
            <div class="Title"><h1>INICIO DE SESIÓN</h1></div>
            <form >     
                <table class="adf">
                    <tr >           
                        <th><label class="coment" for="fuser">Usuario</label></th>
                        <th><input type="text" placeholder="Usuario" id="fuser" name="fuser" class="Campos"><br></th>
                    </tr>
                    <tr>           
                        <th><label class="coment" for="fpass">Contraseña</label></th>
                        <th><input type="password" placeholder="Contraseña" id="fpass" name="fpass" class="Campos"><br></th>
                    </tr>
                    
                   
                    
                </table>
                <button class="invert" type="button" id="signIn" v-on:click="SignUser">Ingresar</button>
                <p><button id="cambio" v-on:click="cambiar">Forgot password</button></p>
            </form>
            </div>         
        </div>    
    


</div>

</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data: function(){
        return{
            username: "",
            password: "",
            apellido: "",
            correo: "",
            rol:"",
            celular:"",
            nombre:""
        };
    },
    methods: {

        cambiar: function(){
            this.$router.push({name: "change"})
                
        },
        
        SignUser: function(){
            var username = document.getElementById("fuser").value;
            var password = document.getElementById("fpass").value;
            
            axios.get("https://expfles-sprint4.herokuapp.com/user/leerUsuario/"+username)
                .then(response=> {
                    if(response.data.password == password ){
                        this.$router.push({name:"user", params:{username:username,
                                                            apellido:response.data.apellido,
                                                            correo:response.data.correo,
                                                            nombre:response.data.nombre,
                                                            celular:response.data.celular,
                                                            rol:response.data.rol}})
                    }
                    else{
                        alert("Datos Incorrectos");
                    }
                    
                })
                .catch(error => {
                    alert("ERROR Servidor");
                });
                
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