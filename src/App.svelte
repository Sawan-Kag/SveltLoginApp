<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import HomePage from "./lib/HomePage.svelte";
  import LoginPage from "./lib/LoginPage.svelte";
  import "../dist/loginapp";
</script>

<Router>
  <Route path="/" component={LoginPage} />
  <Route path="/home" component={HomePage} />
</Router>
