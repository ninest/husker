import type {
  BlockObjectResponse,
  GetDatabaseResponse,
  GetPageResponse,
  ListBlockChildrenResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export async function retrieveNotionPage(pageId: string) {
  const response = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.NOTION_API_KEY,
      accept: "application/json",
      "Notion-Version": "2022-06-28",
    },
  });

  return (await response.json()) as GetPageResponse;
}

export async function retrieveNotionDatabase(databaseId: string) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.NOTION_API_KEY,
      accept: "application/json",
      "Notion-Version": "2022-06-28",
    },
  });
  const responseJson = (await response.json()) as GetDatabaseResponse;
  return responseJson;
}

export async function queryNotionDatabase(databaseId: string, body: Object | QueryDatabaseParameters = {}) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.NOTION_API_KEY,
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseJson = (await response.json()) as QueryDatabaseResponse;
  return responseJson;
}

export async function getBlocksChildrenList(blockId: string) {
  const response = await fetch(`https://api.notion.com/v1/blocks/${blockId}/children`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.NOTION_API_KEY,
      accept: "application/json",
      "Notion-Version": "2022-06-28",
    },
  });
  const responseJson = (await response.json()) as ListBlockChildrenResponse;
  return responseJson;
}

export async function getBlock(blockId: string) {
  const response = await fetch(`https://api.notion.com/v1/blocks/${blockId}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.NOTION_API_KEY,
      accept: "application/json",
      "Notion-Version": "2022-06-28",
    },
    next: { revalidate: 0 },
  });
  const responseJson = (await response.json()) as BlockObjectResponse;
  return responseJson;
}
