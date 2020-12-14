export const apiUrl = `https://api.steampowered.com`;

export function headerImgUrl(appid: string): string {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
}
