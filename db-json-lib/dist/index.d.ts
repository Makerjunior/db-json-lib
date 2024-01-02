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
export declare class JsonDatabase {
    private filename;
    private data;
    /**
     * Creates an instance of JsonDatabase.
     *
     * @param {string} [filename='database.json'] - The name of the JSON file.
     * @memberof JsonDatabase
     */
    constructor(filename?: string);
    /**
     * Loads data from the JSON file.
     *
     * @private
     * @return {Database} The loaded data.
     * @memberof JsonDatabase
     */
    private loadData;
    /**
     * Saves the data to the JSON file.
     *
     * @private
     * @memberof JsonDatabase
     */
    private saveData;
    /**
     * Gets all records from the database.
     *
     * @return {Database} All records in the database.
     * @memberof JsonDatabase
     */
    getAllRecords(): Database;
    /**
     * Gets a specific record from the database.
     *
     * @param {string} key - The key of the record.
     * @return {*} The value associated with the specified key.
     * @memberof JsonDatabase
     */
    getRecord(key: string): any;
    /**
     * Adds a new record to the database.
     *
     * @param {string} key - The key for the new record.
     * @param {*} value - The value associated with the key.
     * @memberof JsonDatabase
     */
    addRecord(key: string, value: any): void;
    /**
     * Updates an existing record in the database.
     *
     * @param {string} key - The key of the record to update.
     * @param {*} newValue - The new value to set for the record.
     * @memberof JsonDatabase
     */
    updateRecord(key: string, newValue: any): void;
    /**
     * Deletes a record from the database.
     *
     * @param {string} key - The key of the record to delete.
     * @memberof JsonDatabase
     */
    deleteRecord(key: string): void;
}
export {};
