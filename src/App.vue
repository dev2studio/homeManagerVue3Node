<template>

    <n-card title="My Dashboard" style="margin-bottom: 16px">
      <n-tabs type="line" animated>
        <n-tab-pane name="Domain" tab="Domain">

          <n-button @click="showDomainForm = !showDomainForm">
            <n-icon size="16">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
              </svg>
            </n-icon>
            Add domain
          </n-button>
          <add-domain :show-domain-form="showDomainForm"/>

          <list-domain/>







        </n-tab-pane>
        <n-tab-pane name="Guids" tab="Guids">
          <guids/>
        </n-tab-pane>

      </n-tabs>
    </n-card>

  </template>


<script>
import AddDomain from "./AddDomain.vue";
import ListDomain from "./ListDomain.vue";
import Guids from "./Guids.vue";

export default {
  name: "App",
  components:{
    AddDomain,ListDomain,Guids
  },
  data() {
    return {
      showDomainForm:false,

      guids:[]
    }
  },
  methods:{

  }
}
</script>

