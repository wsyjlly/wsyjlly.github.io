<template>
  <div class="note-item r-n-sb-c">
    <img src="../../../../../static/images/file.png" alt="" width="20" height="20"
         @click="noteItemClick">
    <p class="item-fill"
       @click="noteItemClick"
       :style="{color:note_item === $store.state.currentNote?'#41b883':'#606060'}">{{note_item.name}}</p>
    <img  alt="" width="25" height="25" src="../../../../../static/images/left.png"
          @click="isEdit" v-show="!note_item.isEdit">
    <img  alt="" width="25" height="25" src="../../../../../static/images/right.png"
          @click="isEdit" v-show="note_item.isEdit">
    <div class="r-n-c-c" v-show="note_item.isEdit">
      <img src="../../../../../static/images/love1.png" alt="" width="18" height="18"
           @click="collectNote" v-show="!note_item.isCollected">
      <img src="../../../../../static/images/love2.png" alt="" width="18" height="18"
           @click="collectNote" v-show="note_item.isCollected">
      <img src="../../../../../static/images/move.png" alt="" width="18" height="18"
           @click="moveNote">
      <img src="../../../../../static/images/delete.png" alt="" width="18" height="18"
           @click="deleteNote">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Note',
    props:{
      note_item:Object
    },
    methods:{
      noteItemClick(){
        let that = this;
        let store = this.$store.state;
        store.currentNote = that.note_item;
        store.editor.txt.html(that.note_item.content);
      },
      isEdit(){
        let that = this;
        let store = this.$store.state;
        store.currentNote = that.note_item;
        store.note_list.forEach((e1) => e1.isEdit=e1===store.currentNote?!e1.isEdit:false);
      },
      collectNote(){
        let store = this.$store.state;
        store.note_list.forEach((e1) => e1===store.currentNote?
          e1.isCollected = !e1.isCollected:{});

        store.note_list.forEach((e1) => e1.isEdit=false);
      },
      moveNote(){
        let store = this.$store.state;
        store.messageWindowContent.title = "移动笔记";
        store.messageWindowContent.content = "请选择目标笔记本";
        /*设置交互框状态*/
        store.messageWindowUseType = 5;
        store.isMessageWindowShow = true;
        store.isInputShow = false;
        store.isSelectShow = true;

      },
      deleteNote(){
        let that = this;
        let store = this.$store.state;
        store.messageWindowContent.title = "删除笔记";
        store.messageWindowContent.content = "确认删除笔记："+that.note_item.name+" ?";
        /*设置交互框状态*/
        store.messageWindowUseType = 6;
        store.isMessageWindowShow = true;
        store.isInputShow = false;
        store.isSelectShow = false;

      }
    }
  }
</script>

<style scoped>
  .note-item>div{
    width: 80px;
    height: 30px;
    padding: 0 10px;
    /*background: #d3d0db;*/
    /*display: none;*/
  }
</style>
