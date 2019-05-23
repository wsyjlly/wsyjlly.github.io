<template>
  <div class="note-item2 r-n-sb-c">
    <img src="../../../../../static/images/file.png" alt="" width="20" height="20"
         @click="deletedNoteItemClick">
    <p class="item-fill"
       @click="deletedNoteItemClick"
       :style="{color:delete_item === $store.state.currentNote?'#41b883':'#606060'}">{{delete_item.name}}</p>
    <img  alt="" width="25" height="25" src="../../../../../static/images/left.png"
          @click="isEdit" v-show="!delete_item.isEdit">
    <img  alt="" width="25" height="25" src="../../../../../static/images/right.png"
          @click="isEdit" v-show="delete_item.isEdit">
    <div class="r-n-c-c" v-show="delete_item.isEdit">
      <img src="../../../../../static/images/restore.png" alt="" width="18" height="18" @click="restoreNoteToNoteBook">
      <img src="../../../../../static/images/delete.png" alt="" width="18" height="18" @click="downrightDeleteNote">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DeletedNote',
    props:{
      delete_item:Object
    },
    methods:{
      deletedNoteItemClick(){
        let that = this;
        let store = this.$store.state;
        store.currentNote = that.delete_item;
        store.editor.txt.html(that.delete_item.content);
      },
      isEdit(){
        let that = this;
        let store = this.$store.state;
        store.currentNote = that.delete_item;
        store.delete_list.forEach((e1) => e1.isEdit=e1===store.currentNote?!e1.isEdit:false);
      },
      restoreNoteToNoteBook(){
        let store = this.$store.state;
        store.messageWindowContent.title = "恢复笔记";
        store.messageWindowContent.content = "请选择目标笔记本";
        /*设置交互框状态*/
        store.messageWindowUseType = 7;
        store.isMessageWindowShow = true;
        store.isInputShow = false;
        store.isSelectShow = true;
      },
      downrightDeleteNote(){
        let that = this;
        let store = this.$store.state;
        store.messageWindowContent.title = "删除笔记";
        store.messageWindowContent.content = "确认删除笔记："+that.delete_item.name+" ?";
        /*设置交互框状态*/
        store.messageWindowUseType = 8;
        store.isMessageWindowShow = true;
        store.isInputShow = false;
        store.isSelectShow = false;
      }
    }
  }
</script>

<style scoped>
  .note-item2>div{
    width: 50px;
    height: 30px;
    padding: 0 10px;
    /*background: #d3d0db;*/
    /*display: none;*/
  }
</style>
