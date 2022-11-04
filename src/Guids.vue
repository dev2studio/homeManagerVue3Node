<template>
  <n-grid cols="4" item-responsive>
    <n-grid-item span="0 400:1 600:2 800:3">

    </n-grid-item  >
    <n-grid-item>

      <n-list hoverable clickable>
        <n-list-item  >
          <n-thing title="Ubuntu" content-style="margin-top: 10px;"></n-thing>
        </n-list-item>

        <n-list-item >
          <n-thing title="Git" content-style="margin-top: 10px;"></n-thing>
        </n-list-item>

        <n-list-item >
          <n-thing title="Laravel" content-style="margin-top: 10px;"></n-thing>
        </n-list-item>


        <n-list-item >
          <n-thing title="Docker" content-style="margin-top: 10px;"></n-thing>
        </n-list-item>

      </n-list>


    </n-grid-item>
  </n-grid>

</template>

<script>
export default {
  name: "Guids"
}
</script>

<style scoped>

</style>