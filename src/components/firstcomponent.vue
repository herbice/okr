<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script type="text/javascript">
export default {
  name:'firstcomponent',
  data () {  
    return {
      author: "LJ"
    }
  }
}
</script>
<style>
</style>
