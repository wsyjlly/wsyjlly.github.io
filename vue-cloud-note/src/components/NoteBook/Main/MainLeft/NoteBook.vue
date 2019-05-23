<template>
  <div class="folder-item r-n-sb-c">
    <img src="../../../../../static/images/folder.png" alt="" width="20" height="20"
         @click="folderItemClick">
    <p class="item-fill"
       @click="folderItemClick"
       :style="{color:folder_item === $store.state.currentFolder?'#41b883':'#606060'}">{{folder_item.name}}</p>
    <img  alt="" width="25" height="25" src="../../../../../static/images/left.png"
          @click="isEdit" v-show="!folder_item.isEdit">
    <img  alt="" width="25" height="25" src="../../../../../static/images/right.png"
          @click="isEdit" v-show="folder_item.isEdit">
    <div class="r-n-c-c" v-show="folder_item.isEdit">
      <img src="../../../../../static/images/update.png" alt="" width="18" height="18" @click="updateNoteBookName">
      <img src="../../../../../static/images/delete.png" alt="" width="18" height="18" @click="deleteNoteBook">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoteBook',
    data(){
      return{

      }
    },
    props:{
      folder_item:Object
    },
    methods:{
      folderItemClick(){
        let that = this;
        let store = this.$store.state;
        store.secondColumnTitle = "我的笔记";
        store.noteAddIsShow = true;
        store.isOneFolderNoteListShow = true;
        store.isDeletedShow = false;
        store.isCollectedShow = false;
        store.main_title = that.folder_item.name;
        store.currentFolder = that.folder_item;
        store.folder_note_list = [];
        store.note_list.forEach((note) => note.nbId === that.folder_item.id && !note.isDeleted ? store.folder_note_list.push(note):{})
        store.note_list.forEach((e1) => e1.isEdit=false);
      },
      isEdit(){
        let that = this;
        let store = this.$store.state;
        store.main_title = that.folder_item.name;
        store.currentFolder = that.folder_item;
        /*
        * 当遍历的数组元素为基本数据类型时，map()函数不改变原数组，
        * 但便利元素为对象时或数组时改变对象或数组元素，原数组中的对象同时改变，此时map函数有forEach函数的作用
        * */
        store.folder_list.forEach((e1) => e1.isEdit=e1===store.currentFolder?!e1.isEdit:false);
      },
      updateNoteBookName(){
        let that = this;
        let store = this.$store.state;
        store.main_title = that.folder_item.name;
        store.currentFolder = that.folder_item;

        store.messageWindowContent.title = "修改笔记本";
        store.messageWindowContent.content = that.folder_item.name;
        /*设置交互框状态*/
        store.messageWindowUseType = 1;
        store.isMessageWindowShow = true;
        store.isInputShow = true;
        store.isSelectShow = false;

      },
      deleteNoteBook(){
        let that = this;
        let store = this.$store.state;
        store.main_title = that.folder_item.name;
        store.currentFolder = that.folder_item;

        store.messageWindowContent.title = "删除笔记本";
        store.messageWindowContent.content = "确认删除笔记本："+that.folder_item.name+" ?";
        /*设置交互框状态*/
        store.messageWindowUseType = 2;
        store.isMessageWindowShow = true;
        store.isInputShow = false;
        store.isSelectShow = false;

      }
    }
  }
</script>

<style scoped>
  .folder-item>div{
    width: 50px;
    height: 30px;
    padding: 0 10px;
    /*background: #d3d0db;*/
    /*display: none;*/
  }
</style>
