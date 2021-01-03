export async function headerImgUrl(appid: number): Promise<string> {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
}
