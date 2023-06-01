<script>
  import { navigate } from "svelte-routing";
  import { setUser } from "./store";
  let email = "";
  let password = "";

  function handleLogin() {
    if (email === "123" && password === "123") {
      const userData = { email };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(email, password);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  }
</script>

<div>
  <form action="">
    <h1>Login</h1>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button on:click={handleLogin}>Login</button>
  </form>
</div>
