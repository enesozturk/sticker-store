const ListResponse = {
  object: "list",
  results: [
    {
      object: "page",
      id: "e0d3e899-1d9d-4df3-9dbd-e106a2c3764e",
      created_time: "2021-05-15T21:01:01.937Z",
      last_edited_time: "2021-05-15T22:05:00.000Z",
      parent: {
        type: "database_id",
        database_id: "9fd2dd9d-5bc7-4740-bdb5-5d1df5b722fa",
      },
      archived: false,
      properties: {
        status: {
          id: "KwrS",
          type: "text",
          text: [],
        },
        price: {
          id: "SFXe",
          type: "number",
          number: 2,
        },
        image: {
          id: "mxRz",
          type: "files",
          files: [
            {
              name: "https://commerce-strapi-images.s3.eu-central-1.amazonaws.com/next.png",
            },
          ],
        },
        title: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Next.js",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Next.js",
              href: null,
            },
          ],
        },
      },
    },
    {
      object: "page",
      id: "72ead674-f920-489d-b9f7-6bac322627c9",
      created_time: "2021-05-15T21:01:01.937Z",
      last_edited_time: "2021-05-15T22:41:00.000Z",
      parent: {
        type: "database_id",
        database_id: "9fd2dd9d-5bc7-4740-bdb5-5d1df5b722fa",
      },
      archived: false,
      properties: {
        status: {
          id: "KwrS",
          type: "text",
          text: [],
        },
        price: {
          id: "SFXe",
          type: "number",
          number: 2,
        },
        image: {
          id: "mxRz",
          type: "files",
          files: [
            {
              name: "https://commerce-strapi-images.s3.eu-central-1.amazonaws.com/docker.png",
            },
          ],
        },
        title: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Docker 12",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Docker 12",
              href: null,
            },
          ],
        },
      },
    },
  ],
  next_cursor: null,
  has_more: false,
};

const PageDetailsResponse = {
  object: "page",
  id: "72ead674-f920-489d-b9f7-6bac322627c9",
  created_time: "2021-05-15T21:01:01.937Z",
  last_edited_time: "2021-05-15T22:41:00.000Z",
  parent: {
    type: "database_id",
    database_id: "9fd2dd9d-5bc7-4740-bdb5-5d1df5b722fa",
  },
  archived: false,
  properties: {
    status: {
      id: "KwrS",
      type: "text",
      text: [],
    },
    price: {
      id: "SFXe",
      type: "number",
      number: 2,
    },
    image: {
      id: "mxRz",
      type: "files",
      files: [
        {
          name: "https://commerce-strapi-images.s3.eu-central-1.amazonaws.com/docker.png",
        },
      ],
    },
    title: {
      id: "title",
      type: "title",
      title: [
        {
          type: "text",
          text: {
            content: "Docker 12",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "Docker 12",
          href: null,
        },
      ],
    },
  },
};

export { ListResponse, PageDetailsResponse };
