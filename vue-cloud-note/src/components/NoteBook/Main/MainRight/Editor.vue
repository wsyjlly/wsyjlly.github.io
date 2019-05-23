<template>
  <div id="third-edit-content" :style="{height:main_height-122+'px'}">
    <div id="edit-menu"></div>
    <div id="edit-content" :style="{height:main_height-152+'px'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
    props:["main_height"],
    /*computed:{
      currentNote(e){
        console.log(e);
        if (e!=={}) this.$store.state.editor.txt.html(e.content);
      }
    },*/
    mounted:function () {
      /*
      * 创建富文本编辑器
      * */
      const E1 = this.Editor;
      const editor = new E1('#edit-menu','#edit-content');
      this.$store.state.editor = editor;
      editor.create();
    }
  }
</script>

<style scoped>

  #third-edit-content{
    width: 100%;
    z-index: 0!important;
    /*height: 500px;*/
  }
  #edit-menu{
    z-index: 1;
    /*border: solid 1px #ccc;*/
    /*height: 50px;*/
    width: 100%;
    /*background: #ff3b2f;*/
  }
  #edit-content{
    width: 100%;
    /*border: solid 1px #ccc;*/
    background: #ffffff;
    z-index: 1;
  }
</style>
