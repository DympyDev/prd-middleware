import fs from 'fs';
import * as XLSX from 'xlsx';

// TODO: Document properly
export default class Utils {
  static readJsonFromFile(file) {
    const buf = fs.readFileSync(file);
    const workbook = XLSX.read(buf, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(worksheet);
  }
  
  static objectContainsQueryInProperties(object, query, searchableFields) {
    return Object.keys(object).map(prop => {
      if (!searchableFields.includes(prop)) return false;
      return object[prop].toLowerCase().includes(query.toLowerCase());
    }).filter(objectMatch => objectMatch === true).length > 0;
  }
}