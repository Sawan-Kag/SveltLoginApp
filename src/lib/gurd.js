import { navigate } from "svelte-routing";
import { user } from "./store";

export function requireAuth(to, from, next) {
  const unsubscribe = user.subscribe((userData) => {
    if (!userData) {
      navigate("/");
    } else {
      unsubscribe();
      next();
    }
  });
}
