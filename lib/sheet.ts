import { Category, Resource } from "@/types/resource";
import { GoogleSpreadsheet } from "google-spreadsheet";

const sheet = new GoogleSpreadsheet(
  "1EpqttYamRgsOIj84_t19SymIuXhD1fgbg6EG1zIoMJM"
);
sheet.useApiKey(process.env.GOOGLE_API_KEY);

export async function getSheets(): Promise<Category[]> {
  await sheet.loadInfo();
  const indexSheet = sheet.sheetsById[1558207367]; // "Index" sheet ID
  const rows = await indexSheet.getRows();

  const sheetLinks: Category[] = [];

  for (const row of rows) {
    const data: string[] = row._rawData;
    const sheetLink: Category = {
      name: data[0],
      sheetId: sheet.sheetsByTitle[data[0]].sheetId,
    };
    if (data[1]) sheetLink.description = data[1];

    sheetLinks.push(sheetLink);
  }
  return sheetLinks;
}

export async function getResources(sheetId: string): Promise<Resource[]> {
  await sheet.loadInfo();
  const resourceSheet = sheet.sheetsById[sheetId];
  const rows = await resourceSheet.getRows();

  const resources: Resource[] = [];
  for (const row of rows) {
    resources.push({
      name: row.Name,
      url: row.URL,
      description: row.Description,
      notes: row.Notes,
    });
  }
  return resources;
}
