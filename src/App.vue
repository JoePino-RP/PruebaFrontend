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
      <Inicial></Inicial>
      <router-view> </router-view>
    </div>

    <!--Footer-->
    

  </div>
</template>

<script>
import Inicial from './components/Inicial.vue'
export default {
  name: 'App',
  components: {Inicial},
  data: function (){
    
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
        padding: 0.1  ;
        width: 100%;
        height: 1vh;
        min-height: 20px; 
        background-color: #082e55; 
        color: #E5E7E9;
        text-align: center;
    }

</style>

