import type {
  BlockObjectResponse,
  GetDatabaseResponse,
  GetPageResponse,
  ListBlockChildrenResponse,
  ListCommentsResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";

if (!process.env.NOTION_API_KEY) {
  throw Error("Missing NOTION_API_KEY. Please check out https://github.com/ninest/husker to set up your env.")
}

const notionHeaders = {
  Authorization: "Bearer " + process.env.NOTION_API_KEY,
  accept: "application/json",
  "Notion-Version": "2022-06-28",
};
const getOptions = {
  method: "GET",
  headers: notionHeaders,
};
const postOptions = (body: object) => ({
  method: "POST",
  headers: {
    ...notionHeaders,
    "content-type": "application/json",
  },
  body: JSON.stringify(body),
});

export async function retrieveNotionPage(pageId: string) {
  const response = await fetch(`https://api.notion.com/v1/pages/${pageId}`, getOptions);

  return (await response.json()) as GetPageResponse;
}

export async function retrieveNotionDatabase(databaseId: string) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}`, getOptions);
  const responseJson = (await response.json()) as GetDatabaseResponse;
  return responseJson;
}

export async function queryNotionDatabase(databaseId: string, body: Object | QueryDatabaseParameters = {}) {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, postOptions(body));
  const responseJson = (await response.json()) as QueryDatabaseResponse;
  return responseJson;
}

export async function getBlocksChildrenList(blockId: string) {
  const response = await fetch(`https://api.notion.com/v1/blocks/${blockId}/children`, getOptions);
  const responseJson = (await response.json()) as ListBlockChildrenResponse;
  return responseJson;
}

export async function getBlock(blockId: string) {
  const response = await fetch(`https://api.notion.com/v1/blocks/${blockId}`, {
    ...getOptions,
    next: { revalidate: 0 },
  });
  const responseJson = (await response.json()) as BlockObjectResponse;
  return responseJson;
}

export async function retrieveComments(pageId: string) {
  const response = await fetch(`https://api.notion.com/v1/comments?block_id=${pageId}`, getOptions);
  const responseJson = (await response.json()) as ListCommentsResponse;
  return responseJson;
}
