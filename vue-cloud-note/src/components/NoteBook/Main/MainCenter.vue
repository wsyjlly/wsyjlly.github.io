<template>
  <div id="second">
    <CenterTop/>
    <Notes  :style="{height:main_height-121+'px'}" :main_width="main_width"/>
  </div>
</template>

<script>
  import CenterTop from "./MainCenter/CenterTop"
  import Notes from "./MainCenter/Notes"
  export default {
    name: 'MainCenter',
    props:["main_width","main_height"],
    components:{
      CenterTop,
      Notes
    }
  }
</script>
<style scoped>
  #second{
    width: 20%;
    height: 100%;
    /*background: #9dc4d4;*/
    background: radial-gradient(circle at left,#ffffff,#fafafa,#f9f9f9);
    border-right: #41b883 solid 1px;
  }
</style>
