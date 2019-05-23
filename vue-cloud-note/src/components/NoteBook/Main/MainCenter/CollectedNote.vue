<template>
  <div class="note-item3 r-n-sb-c">
    <img src="../../../../../static/images/file.png" alt="" width="20" height="20"
         @click="collectedNoteItemClick">
    <p class="item-fill"
       @click="collectedNoteItemClick"
       :style="{color:collect_item === $store.state.currentNote?'#41b883':'#606060'}">{{collect_item.name}}</p>
    <img  alt="" width="25" height="25" src="../../../../../static/images/left.png"
          @click="isEdit" v-show="!collect_item.isEdit">
    <img  alt="" width="25" height="25" src="../../../../../static/images/right.png"
          @click="isEdit" v-show="collect_item.isEdit">
    <div class="r-n-c-c" v-show="collect_item.isEdit">
      <img src="../../../../../static/images/remove.png" alt="" width="18" height="18" @click="cancelCollected">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CollectedNote',
    props:{
      collect_item:Object
    },
    methods:{
      collectedNoteItemClick(){
        let that = this;
        let store = this.$store.state;
        store.currentNote = that.collect_item;
        store.editor.txt.html(that.collect_item.content);
      },
      isEdit(){
        let that = this;
        let store = this.$store.state;
        store.currentNote = that.collect_item;
        store.collect_list.forEach((e1) => e1.isEdit=e1===store.currentNote?!e1.isEdit:false);
      },
      cancelCollected(){
        let that = this;
        let store = this.$store.state;
        store.messageWindowContent.title = "取消收藏";
        store.messageWindowContent.content = "确认取消收藏笔记："+that.collect_item.name+" ?";
        /*设置交互框状态*/
        store.messageWindowUseType = 9;
        store.isMessageWindowShow = true;
        store.isInputShow = false;
        store.isSelectShow = false;
      }
    }
  }
</script>

<style scoped>
  .note-item3>div{
    width: 22px;
    height: 30px;
    padding: 0 10px;
    /*background: #d3d0db;*/
    /*display: none;*/
  }
</style>
