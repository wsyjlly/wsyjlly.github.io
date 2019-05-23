<template>
  <div id="third" class="bg2">
    <EditorTitle/>
    <Editor :main_height="main_height"/>
  </div>
</template>

<script>
  import EditorTitle from "./MainRight/EditorTitle";
  import Editor from "./MainRight/Editor";
  export default {
    name: 'MainRight',
    props:["main_height"],
    components:{
      EditorTitle,
      Editor
    }
  }
</script>

<style scoped>
  #third{
    width: 60%;
    height: 100%;
    background: #f5f5f5;
    /*background: radial-gradient(circle at left,#fff,#9dc4d4);*/
  }
</style>
