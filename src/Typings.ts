import * as knex from 'knex'; 

/**
 * The configuration file for creating new databases.
 * 
 * @export
 * @interface Config
 * @extends {knex.Config}
 */
export interface Config extends knex.Config { 
  tables?: string[],
  filename?: string,
  interfaceNameFormat?: string,
  schemaAsNamespace?: boolean,
  schemas?: string[],
  template?: string,
  typeMap?: {
    [key: string]: string[]
  }
  typeOverrides?: { 
    [key: string]: string 
  },
  additionalProperties?: { 
    [key: string]: string []
  },
  extends?: { 
    [key: string]: string
  }
} 

/**
 * The JSON definition of a column for importing and exporting.
 * 
 * @export
 * @interface Column
 */
export interface Column {
  name: string,
  type: string,
  optional: boolean,
  nullable: boolean
  virtual: boolean
  extra: any
}

/**
 * The JSON definition of a taboe for importing and exporting.
 * 
 * @export
 * @interface Table
 */
export interface Table {
  name: string,
  schema: string,
  columns: Column[]

  /**
   * This string is a class or interface that this definition should extend
   *
   * @type {string}
   * @memberof Table
   */
  extends?: string

  /**
   *  This array of string will be added as properties to the object
   *  when it is exported
   *
   * @type {string[]}
   * @memberof Table
   */
  additionalProperties?: string[],
}

/**
 * The JSON definition of a database for importing and exporting.
 * 
 * @export
 * @interface Database
 */
export interface Database {
  tables: Table[]
}