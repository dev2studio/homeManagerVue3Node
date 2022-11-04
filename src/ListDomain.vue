<template>

  <n-grid x-gap="12" :cols="4" style="margin-top: 25px;">
    <n-gi style="margin-bottom: 15px;" v-for="(item,index) in list" :key="index">
      <n-card :title="item.name"> {{item.url}}</n-card>
    </n-gi>

  </n-grid>


</template>

<script>
export default {
  name: "ListDomain",
  data(){
    return{
      list:[
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        },
        {
          id:0,
          name:'Mysql',
          url:'http://localhost',
          description:'Small decription'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>