"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDatabase = void 0;
const fs = __importStar(require("fs"));
/**
 * A class for interacting with a JSON database.
 *
 * @export
 * @class JsonDatabase
 */
class JsonDatabase {
    /**
     * Creates an instance of JsonDatabase.
     *
     * @param {string} [filename='database.json'] - The name of the JSON file.
     * @memberof JsonDatabase
     */
    constructor(filename = 'database.json') {
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
    loadData() {
        if (fs.existsSync(this.filename)) {
            const fileContent = fs.readFileSync(this.filename, 'utf-8');
            return JSON.parse(fileContent);
        }
        else {
            return {};
        }
    }
    /**
     * Saves the data to the JSON file.
     *
     * @private
     * @memberof JsonDatabase
     */
    saveData() {
        fs.writeFileSync(this.filename, JSON.stringify(this.data, null, 2), 'utf-8');
    }
    /**
     * Gets all records from the database.
     *
     * @return {Database} All records in the database.
     * @memberof JsonDatabase
     */
    getAllRecords() {
        return this.data;
    }
    /**
     * Gets a specific record from the database.
     *
     * @param {string} key - The key of the record.
     * @return {*} The value associated with the specified key.
     * @memberof JsonDatabase
     */
    getRecord(key) {
        return this.data[key];
    }
    /**
     * Adds a new record to the database.
     *
     * @param {string} key - The key for the new record.
     * @param {*} value - The value associated with the key.
     * @memberof JsonDatabase
     */
    addRecord(key, value) {
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
    updateRecord(key, newValue) {
        if (key in this.data) {
            this.data[key] = newValue;
            this.saveData();
        }
        else {
            console.log(`Key '${key}' not found.`);
        }
    }
    /**
     * Deletes a record from the database.
     *
     * @param {string} key - The key of the record to delete.
     * @memberof JsonDatabase
     */
    deleteRecord(key) {
        if (key in this.data) {
            delete this.data[key];
            this.saveData();
        }
        else {
            console.log(`Key '${key}' not found.`);
        }
    }
}
exports.JsonDatabase = JsonDatabase;
