<template>

  <div id="second-content" class="c-n-fs-fs"
       :style="{width:main_width*0.2+'px'}">
    <Note v-for="(item,index) in folder_note_list"
          :key="index"
          :note_item="item" v-show="$store.state.isOneFolderNoteListShow"/>
    <DeletedNote v-for="(item) in delete_list"
                 :key="item.id"
                 :delete_item="item" v-show="$store.state.isDeletedShow"/>
    <CollectedNote v-for="item in collect_list"
                   :collect_item="item" v-show="$store.state.isCollectedShow"/>
  </div>
</template>

<script>
  import Note from "./Note"
  import DeletedNote from "./DeletedNote"
  import CollectedNote from './CollectedNote'
  export default {
    name: 'Notes',
    data(){
      return{
        /*delete_list:this.$store.state.delete_list,
        collect_list:this.$store.state.collect_list,*/
      }
    },
    computed:{
      folder_note_list(){
        return this.$store.state.folder_note_list;
      },
      delete_list(){
        return this.$store.state.delete_list;
      },
      collect_list(){
        return this.$store.state.collect_list;
      }
    },


    props:["main_width"],
    components:{
      Note,
      DeletedNote,
      CollectedNote
    }
  }
</script>

<style scoped>
  #second-content{
    overflow-y: auto;
  }
</style>
