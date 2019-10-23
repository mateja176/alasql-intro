import * as alasql from 'alasql';
import { v4 } from 'uuid';

const db = new (alasql as any).Database();

const user = { id: v4(), name: 'Mateja', lastname: 'Petrovic' };

db.exec(
  'CREATE TABLE users (id STRING PRIMARY KEY, name STRING, lastname STRING)',
);

const result = alasql(
  `INSERT INTO users (id, name, lastname) VALUES ('${user.id}', '${user.name}', '${user.lastname}')`,
);

console.log(result);
