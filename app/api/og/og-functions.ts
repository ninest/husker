type OgImageCreationParams = { title: string };

export function createOgImageUrl(params?: Partial<OgImageCreationParams>) {
  let url = `/api/og/`;

  url += Buffer.from(JSON.stringify(params ?? {})).toString("base64url");

  return url;
}

export function getParamsFromUrl(urlString: string): Partial<OgImageCreationParams> {
  const b64 = urlString.split("/og/")[1].split("?")[0];

  const params = b64 ? JSON.parse(Buffer.from(b64, "base64url").toString("ascii")) ?? {} : {};

  return params;
}
