import { JsonDatabase } from ".";

// Exemplo de uso do pacote
const db = new JsonDatabase();

// Adicionando registros
db.addRecord('user1', { name: 'John', age: 30, city: 'New York' });
db.addRecord('user2', { name: 'Alice', age: 25, city: 'Los Angeles' });

// Exibindo todos os registros
console.log('All records:');
console.log(db.getAllRecords());

// Atualizando um registro
db.updateRecord('user1', { name: 'John Smith', age: 31, city: 'New York' });

// Exibindo um registro específico
console.log('\nSpecific record:');
console.log(db.getRecord('user1'));

// Deletando um registro
db.deleteRecord('user2');

// Exibindo todos os registros após a exclusão
console.log('\nAll records after deletion:');
console.log(db.getAllRecords());