import * as fs from 'fs';

/**
 * Represents a simple key-value JSON database.
 *
 * @interface Database
 */
interface Database {
  [key: string]: any;
}

/**
 * A class for interacting with a JSON database.
 *
 * @export
 * @class JsonDatabase
 */
export class JsonDatabase {
  private filename: string;
  private data: Database;

  /**
   * Creates an instance of JsonDatabase.
   *
   * @param {string} [filename='database.json'] - The name of the JSON file.
   * @memberof JsonDatabase
   */
  constructor(filename: string = 'database.json') {
    this.filename = filename;
    this.data = this.loadData();
  }

  /**
   * Loads data from the JSON file.
   *
   * @private
   * @return {Database} The loaded data.
   * @memberof JsonDatabase
   */
  private loadData(): Database {
    if (fs.existsSync(this.filename)) {
      const fileContent = fs.readFileSync(this.filename, 'utf-8');
      return JSON.parse(fileContent);
    } else {
      return {};
    }
  }

  /**
   * Saves the data to the JSON file.
   *
   * @private
   * @memberof JsonDatabase
   */
  private saveData(): void {
    fs.writeFileSync(this.filename, JSON.stringify(this.data, null, 2), 'utf-8');
  }

  /**
   * Gets all records from the database.
   *
   * @return {Database} All records in the database.
   * @memberof JsonDatabase
   */
  getAllRecords(): Database {
    return this.data;
  }

  /**
   * Gets a specific record from the database.
   *
   * @param {string} key - The key of the record.
   * @return {*} The value associated with the specified key.
   * @memberof JsonDatabase
   */
  getRecord(key: string): any {
    return this.data[key];
  }

  /**
   * Adds a new record to the database.
   *
   * @param {string} key - The key for the new record.
   * @param {*} value - The value associated with the key.
   * @memberof JsonDatabase
   */
  addRecord(key: string, value: any): void {
    this.data[key] = value;
    this.saveData();
  }

  /**
   * Updates an existing record in the database.
   *
   * @param {string} key - The key of the record to update.
   * @param {*} newValue - The new value to set for the record.
   * @memberof JsonDatabase
   */
  updateRecord(key: string, newValue: any): void {
    if (key in this.data) {
      this.data[key] = newValue;
      this.saveData();
    } else {
      console.log(`Key '${key}' not found.`);
    }
  }

  /**
   * Deletes a record from the database.
   *
   * @param {string} key - The key of the record to delete.
   * @memberof JsonDatabase
   */
  deleteRecord(key: string): void {
    if (key in this.data) {
      delete this.data[key];
      this.saveData();
    } else {
      console.log(`Key '${key}' not found.`);
    }
  }
}
