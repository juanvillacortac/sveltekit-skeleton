<script>
  import { browser } from "$app/environment";

  import "virtual:windi.css";
  import "virtual:windi-devtools";

  // if you want to enable windi devtools
  // @ts-ignore
  if (browser) import("virtual:windi-devtools");
</script>

<slot />
