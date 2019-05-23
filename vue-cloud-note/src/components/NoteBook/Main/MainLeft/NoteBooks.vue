<template>
  <div id="first-center" class="c-n-fs-fs">
    <NoteBook v-for="item in folder_list"
              :key="item.id"
              :folder_item="item"/>
  </div>
</template>

<script>
  import NoteBook from "./NoteBook"
  export default {
    name: 'NoteBooks',
    data(){
      return{
        folder_list:this.$store.state.folder_list
      }
    },
    components:{
      NoteBook
    },
    methods:{

    }
  }
</script>

<style scoped>
  #first-center{
    width: 100%;
    /*background: #82a2b2;*/
    overflow-y: auto;
  }
</style>
