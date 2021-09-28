import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "");

const getNormalizedRecord = (record: any) => {
  return {
    id: record.id,
    ...record.fields,
  };
};

const getNormalizedRecords = (records: any) => {
  return records.map((record: any) => getNormalizedRecords(record));
};

const getRecords = async (table: string) => {
  const records = await base(table).select().all();
  const data = await getNormalizedRecords(records);

  return data;
};

const getRecord = async (table: string, id: string) => {
  const record = await base(table).find(id);
  const data = await getNormalizedRecord(record);

  return data;
};

const createRecord = async (table: string, fields: any) => {
  const records = await base(table).create([{ fields }]);
  const data = await getNormalizedRecords(records);

  return data;
};

export { createRecord, getRecord, getRecords };
