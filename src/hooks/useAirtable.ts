import { base, getNormalizedRecords } from "../utils/airtable";

const useAirtable = () => {
  const createRecord = (table: string, records: any) => {
    const promise = new Promise((resolve, reject) => {
      base(table).create(records, function (err, records) {
        if (err) {
          reject(err);
        }
        resolve(getNormalizedRecords(records));
      });
    });
    return promise;
  };

  return { createRecord };
};

export { useAirtable };
