import { json } from '@sveltejs/kit';
import { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } from '$env/static/private';

export async function GET() {
  const twitchTokenApiUrl = 'https://id.twitch.tv/oauth2/token';
  const params = new URLSearchParams({
    client_id: TWITCH_CLIENT_ID,
    client_secret: TWITCH_CLIENT_SECRET,
    grant_type: 'client_credentials'
  }).toString();

  const response = await fetch(`${twitchTokenApiUrl}?${params}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'x-www-form-urlencoded'
    }
  });

  const data = await response.json();

  return json(data);
}
