<template>
    <div>
        <div id="LoginFull" class="Login">        
        <div id="Login">
            <div class="Title"><h1>CAMBIO DE CONTRASEÑA</h1></div>
            <form >     
                <table class="adf">
                    <tr >           
                        <th><label class="coment" for="fuser1">Usuario</label></th>
                        <th><input type="text" placeholder="Usuario" id="fuser1" name="fuser1" class="Campos"><br></th>
                    </tr>
                    <tr>           
                        <th><label class="coment" for="fpass1">Contraseña Antigua</label></th>
                        <th><input type="password" placeholder="Contraseña" id="fpass1" name="fpass1" class="Campos"><br></th>
                    </tr>
                    <tr>           
                        <th><label class="coment" for="fnpass1">Contraseña Nueva</label></th>
                        <th><input type="password" placeholder="Contraseña" id="fnpass1" name="fnpass1" class="Campos"><br></th>
                    </tr>
                    <tr>           
                        <th><label class="coment" for="fcnpass1">Confirmar Contraseña</label></th>
                        <th><input type="password" placeholder="Contraseña" id="fcnpass1" name="fcnpass1" class="Campos"><br></th>
                    </tr>                   
                    
                </table>
                <button class="invert" type="button" v-on:click="confirmado">Confirmar</button>
                <button class="invert" type="button" v-on:click="volver3">Volver</button>
            </form>
            </div>         
        </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "Index",
    data: function(){
        return{
            username: "",
            old_password: "",
            new_password: "",
            conf_new_pass: ""
        };
    },
    methods: {
        confirmado: function(){

            var cambiosjson = {
                username: document.getElementById("fuser1").value,
                old_password: document.getElementById("fpass1").value,
                new_password: document.getElementById("fnpass1").value,
                conf_new_pass: document.getElementById("fcnpass1").value,
            };
            console.log(cambiosjson)
            axios.put("http://localhost:8000/user/updateUser/",cambiosjson)
                .then(response=> {
                    /*if(response.data.password == old_password && response.data.username == this.username){
                        /*this.$router.push({name:"user", params:{username:username,
                                                            apellido:response.data.apellido,
                                                            correo:response.data.correo,
                                                            nombre:response.data.nombre,
                                                            celular:response.data.celular,
                                                            rol:response.data.rol}})
                        alert("Realizado con exito")                                                            
                    }
                    else{
                        alert("Datos Incorrectos");
                    }*/
                    alert("HOLA")
                    
                })
                .catch(error => {
                    alert("ERROR Servidor");
                });

              
        },

        volver3: function(){
            this.$router.push({name: "index"})  
        }
    }
    
}
</script>

<style >

</style>