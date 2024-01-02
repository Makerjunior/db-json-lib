## Documentação da Biblioteca JsonDatabase

A `JsonDatabase` é uma biblioteca simples para interagir com um banco de dados JSON de chave-valor. Ela oferece operações básicas, como adição, leitura, atualização e remoção de registros. A biblioteca utiliza o módulo `fs` para manipulação de arquivos, e é projetada para trabalhar com arquivos JSON.

### Instalação

Para utilizar a biblioteca, você pode instalá-la via npm:

```bash
npm install db-json-lib
```

### Exemplo de Uso

```typescript
import { JsonDatabase } from "db-json-lib";

// Criando uma instância do banco de dados
const db = new JsonDatabase();

// Adicionando registros
db.addRecord('user1', { name: 'John', age: 30, city: 'New York' });
db.addRecord('user2', { name: 'Alice', age: 25, city: 'Los Angeles' });

// Exibindo todos os registros
console.log('Todos os registros:');
console.log(db.getAllRecords());

// Atualizando um registro
db.updateRecord('user1', { name: 'John Smith', age: 31, city: 'New York' });

// Exibindo um registro específico
console.log('\nRegistro específico:');
console.log(db.getRecord('user1'));

// Deletando um registro
db.deleteRecord('user2');

// Exibindo todos os registros após a exclusão
console.log('\nTodos os registros após a exclusão:');
console.log(db.getAllRecords());
```

### API

#### `JsonDatabase`

A classe principal para interagir com o banco de dados JSON.

##### Construtor

```typescript
constructor(filename?: string)
```

- `filename` (opcional): O nome do arquivo JSON a ser utilizado como banco de dados. O padrão é 'database.json'.

##### Métodos

- `getAllRecords(): Database`
  - Retorna todos os registros no banco de dados.

- `getRecord(key: string): any`
  - Retorna o valor associado à chave especificada.

- `addRecord(key: string, value: any): void`
  - Adiciona um novo registro ao banco de dados.

- `updateRecord(key: string, newValue: any): void`
  - Atualiza um registro existente no banco de dados.

- `deleteRecord(key: string): void`
  - Exclui um registro do banco de dados.

### Observações

- Certifique-se de manipular erros adequados ao lidar com a biblioteca, especialmente ao trabalhar com operações de arquivo e manipulação de dados.
- Esta biblioteca é projetada para operar com arquivos JSON e utiliza o módulo `fs` do Node.js.
- Sempre mantenha backups regulares do seu arquivo de banco de dados para evitar perda de dados.

Clique na logo acima para acessar o canal no YouTube.
[![Mente Maker](logo.png)](https://www.youtube.com/channel/UCdHR_M4vqK1rtKo56RMQ9tQ)


