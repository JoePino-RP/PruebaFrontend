<template>
  <div id="app">

    <!--Visible en el inicio-->
    <!--header-->
    <div class="header">
      <!--Titulo Aplicativo-->
      <div class="OCR">
        <img src="./assets/Banner1.png" alt="1">
      </div>
    </div>
    

    <!--Cuerpo-->
    <div class="main-component">
      
      <router-view></router-view>
    </div>

    <!--Footer-->

    <div class="footer">  
             <h2>      
              ©2020 por ExpFiles.
            </h2>
    </div>
    

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: function (){
    
  },
  beforeCreate: function(){
    this.$router.push({name:"index"})
    } 
  
}
</script>

<style >
body{
  margin: 0 0 0 0;
}
.OCR{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  align-content: center;
}
.header{
  font: 1em OCR A Extended;
  margin: 0%;
  padding: 0;
  width: 100%;
  min-height: 100px;
  background-color: #082e55 ;
  color: #f5c313 ;
  display: flex;
  justify-content: space-between; 
  align-items: initial;
  align-content: initial;
  text-align: center;
 
  
}

.footer{
        margin: 0;
        padding: 0  ;
        width: 100%;
        height: 15vh;
        min-height: 10px; 
        background-color: #082e55; 
        color: #E5E7E9;
        text-align: center;
        position: static;
        bottom: 0px;
        right: 0px;
        font-family: 'Times New Roman';
    }

</style>

