<template>
  <div id="first-bottom" class="r-n-sa-c">
    <div class="r-n-c-c" @click="showDeleted"><img src="../../../../../static/images/garbage.png" alt="" width="30" height="30"></div>
    <div class="r-n-c-c" @click="showCollected"><img src="../../../../../static/images/collect.png" alt="" width="30" height="30"></div>
    <div class="r-n-c-c"><img src="../../../../../static/images/share.png" alt="" width="30" height="30"></div>
  </div>
</template>

<script>
  export default {
    name: 'LeftBottom',
    methods:{
      showDeleted(){
        let store = this.$store.state;
        store.main_title = "笔记回收站";
        store.secondColumnTitle = "回收站";
        store.noteAddIsShow = false;
        store.isDeletedShow = true;
        store.isCollectedShow = false;
        store.isOneFolderNoteListShow = false;
        store.currentFolder = {};
        store.delete_list = [];
        store.note_list.forEach((note) => note.isDeleted ? store.delete_list.push(note):{})
      },
      showCollected(){
        let store = this.$store.state;
        store.main_title = "笔记收藏";
        store.secondColumnTitle = "我的收藏";
        store.noteAddIsShow = false;
        store.isDeletedShow = false;
        store.isCollectedShow = true;
        store.isOneFolderNoteListShow = false;
        store.currentFolder = {};
        store.collect_list = [];
        console.log(store.note_list);
        store.note_list.forEach((note) => note.isCollected ? store.collect_list.push(note):{});

      }
    }
  }
</script>

<style scoped>
  #first-bottom{
    width: 100%;
    height: 50px;
  }
  #first-bottom>div{
    width: 33.3%;
    height: 50px;
  }
  #first-bottom>div:hover{
    background: #bbdff4;
    cursor: pointer;
  }
</style>
