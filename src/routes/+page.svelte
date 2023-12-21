<script lang="ts">
  import { accessToken } from '$lib/stores/access-token';

  type AccessToken = {
    access_token: string;
    expires_in: number;
    token_type: string;
  };

  let user: AccessToken;

  async function login() {
    const response = await fetch('/api/twitch/auth');
    user = await response.json();

    accessToken.set(user.access_token);
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={login}>Login to twitch</button>
