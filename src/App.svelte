<script>
  import Stack from "./shared_components/stack/stack.svelte";
  import TopBar from "./shared_components/topBar/topBar.svelte";
</script>

<style type="text/scss">
  .wrapper {
    top: 0;
    flex: 1 0 auto;
    height: 100%;
    display: flex;
    z-index: 1200;
    outline: none;
    position: fixed;
    overflow-y: auto;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
  }
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content-container {
    flex: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
  }
  .content-col {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
    background-image: linear-gradient(purple, indigo);
  }

  .header-col {
    display: flex;
    height: 100px;
    background-color: #000;
  }

  .footer-col {
    display: flex;
    height: 100px;
    background-color: #000;
  }

  .faked-content {
    min-height: 2000px;
  }

  .faked-bar {
    min-height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

<div class="wrapper">
  <div class="container">
    <div class="header-col" />
    <div class="content-container">
      <div class="content-col">
        <div class="faked-content">
          <Stack />
          <TopBar />
        </div>
        <div class="faked-bar" />
        <div class="faked-bar" />
        <div class="faked-bar" />
      </div>
    </div>
    <div class="footer-col" />
  </div>
</div>
