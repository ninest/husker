import { Category, Resource } from "@/types/resource";
import { delay } from "@/utils/delay";
import { slugify } from "@/utils/slug";
import { GoogleSpreadsheet } from "google-spreadsheet";

const sheet = new GoogleSpreadsheet(
  "1EpqttYamRgsOIj84_t19SymIuXhD1fgbg6EG1zIoMJM"
);
sheet.useApiKey(process.env.GOOGLE_API_KEY);

export async function getSheets(): Promise<Category[]> {
  /* Return Categories (without resources) */
  await sheet.loadInfo();
  const indexSheet = sheet.sheetsById[1558207367]; // "Index" sheet ID
  const rows = await indexSheet.getRows();

  const sheetLinks: Category[] = [];

  for (const row of rows) {
    const data: string[] = row._rawData;
    const sheetLink: Category = {
      name: data[0],
      slug: slugify(data[0]),
      sheetId: sheet.sheetsByTitle[data[0]].sheetId,
    };
    if (data[1]) sheetLink.description = data[1];

    sheetLinks.push(sheetLink);
  }
  return sheetLinks;
}

export async function getResources(sheetId: string): Promise<Resource[]> {
  /* Return Categories with resources */
  await delay(300); // Add delay to prevent error 429: rate limiting
  await sheet.loadInfo();
  const resourceSheet = sheet.sheetsById[sheetId];
  const rows = await resourceSheet.getRows();

  const resources: Resource[] = [];
  for (const row of rows) {
    // resources.push({
    //   name: row.Name,
    //   url: row.URL,
    //   description: row.Description ?? null, // `undefined` cannot be serialized as JSON
    //   notes: row.Notes ?? null,
    // });
  }
  return resources;
}
