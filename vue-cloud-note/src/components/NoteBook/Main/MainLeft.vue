<template>
  <div id="first" class="c-n-sb-fs bg2">
    <LeftTop/>
    <NoteBooks  :style="{height:main_height-171+'px'}"/>
    <LeftBottom/>
  </div>
</template>

<script>
  import LeftTop from "./MainLeft/LeftTop";
  import NoteBooks from "./MainLeft/NoteBooks";
  import LeftBottom from "./MainLeft/LeftBottom";
  export default {
    name: 'MainLeft',
    props:[
      "main_height",
      "main_width"
    ],
    components:{
      LeftTop,
      NoteBooks,
      LeftBottom
    }
  }
</script>

<style scoped>
  #first{
    width: 20%;
    height: 100%;
    /*background: #82a2b2;*/
    background: radial-gradient(circle at right,#ffffff,#fafafa,#f9f9f9);
    /*border-right: #1296db solid 1px;*/
    border-right: solid 1px rgba(65,184,131,0.3);
    /*overflow: auto;*/
  }
</style>
