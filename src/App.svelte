<script>
  import Button from "./button.svelte";
  import Stack from "./shared_components/stack/stack.svelte";
  export let name;
</script>

<style type="text/scss">
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content-col {
    flex: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
  }

  .header-col {
    display: flex;
    flex-direction: column;
    height: 100px;
    background-color: red;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    height: 100px;
    background-color: blue;
  }

  .faked-content {
    min-height: 2000px;
    background-image: linear-gradient(green, yellow);
  }

  .faked-bar {
    min-height: 50px;
    outline: solid 1px black;
    margin: 5px 0;
  }
  .footer-space {
    min-height: 50px;
    background-color: blue;
  }
</style>

<div class="container">
  <div class="header-col" />
  <div class="content-col">
    <div class="faked-content">
      <Stack />
    </div>
    <div class="faked-bar" />
    <div class="faked-bar" />
    <div class="faked-bar" />
  </div>
  <div class="footer-col" />
  <div class="footer-space" />
</div>
