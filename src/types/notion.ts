export type NotionQueryData = {
  object: string;
  results: {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    parent: {
      type: string;
      database_id: string;
    };
    archived: boolean;
    // properties: {
    //   [key: string]: {
    //     id: string;
    //     type:
    //       | "title"
    //       | "rich_text"
    //       | "number"
    //       | "select"
    //       | "multi_select"
    //       | "date"
    //       | "people"
    //       | "file"
    //       | "checkbox"
    //       | "url"
    //       | "email"
    //       | "phone_number"
    //       | "formula"
    //       | "relation"
    //       | "rollup"
    //       | "created_time"
    //       | "created_by"
    //       | "last_edited_time"
    //       | "last_edited_by";
    //   };
    // };
    properties: any;
  }[];
  next_cursor: any;
  has_more: boolean;
};
