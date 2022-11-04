<template>
  <n-card v-if="showDomainForm">
    <n-space vertical>
      <n-input v-model:value="name" type="text" placeholder="Basic Input" />
      <n-input v-model:value="url" type="text" placeholder="URL" />
      <n-input
          v-model:value="description"
          type="textarea"
          placeholder="Simple description"
      />
      <n-button type="success" @click="addDomain">Add</n-button>
    </n-space>
  </n-card>
</template>

<script>
export default {
  props:['showDomainForm'],
  name: "AddDomain",
  data(){
    return {
      name:null,
      description:null,
      url:'http://'
    }
  },
  methods:{
    addDomain: function (){
      this.axios.post('http://home.com:8000/api/add-domain',{
        name:this.name,url:this.url,description:this.description
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>