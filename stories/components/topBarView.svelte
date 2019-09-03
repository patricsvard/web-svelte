<script>
  import TopBar from "../../src/shared_components/topBar";
  import Icon from "../../src/shared_components/icon";
</script>

<style type="text/scss">
  @import "@material/icon-button/mdc-icon-button";
</style>

<TopBar title="Example of Top Bar">
  <button
    slot="right"
    class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">
    <Icon name="menu" />
  </button>
</TopBar>
