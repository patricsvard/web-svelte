<script>
  import { readUser, writeUser, created, enabled } from "./stores.js";
</script>

<style type="text/scss">
  @import "./theme.scss";
  @import "@material/chips/mdc-chips";
</style>

<small class="mdc-chip">{$created}</small>
