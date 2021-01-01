export interface ResolveVanityUrl {
  response: SimpleVanityUrl;
}

export interface SimpleVanityUrl {
  steamid: string;
  success: number;
}
