<template>
  <div id="main"  class="r-n-fs-fs">
    <MainLeft :main_height="main_height" :main_width="main_width" />
    <MainCenter :main_height="main_height" :main_width="main_width" />
    <MainRight :main_height="main_height"/>
  </div>
</template>

<script>
  import MainLeft from "./Main/MainLeft";
  import MainCenter from "./Main/MainCenter";
  import MainRight from "./Main/MainRight";
  export default {
    name: 'Main',
    props:[
      "main_height",
      "main_width"
    ],
    components:{
      MainLeft,
      MainCenter,
      MainRight
    },
    mounted:function(){
      let store = this.$store.state;
      if (store.folder_list.length === 0) return;
      /*
      * 初始化当前笔记本
      * */
      store.currentFolder = store.folder_list[0];
      store.main_title = store.folder_list[0].name;
      /*
      * 初始化当前笔记
      * */
      store.folder_note_list = [];
      store.note_list.forEach((e)=>
        e.nbId === store.folder_list[0].id && !e.isDeleted ?
          store.folder_note_list.push(e):{});
      store.isOneFolderNoteListShow = true;
      /*
      * 初始化富文本编辑器
      * */
      store.currentNote = store.folder_note_list[0];
      store.editor.txt.html(store.currentNote.content);
    },
  }
</script>

<style scoped>

</style>
