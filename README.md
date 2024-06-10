# Bazar Tem Tudo

Este repositório é um projeto de aplicação para a matéria 5SDB da FAETERJ Rio utilizando TypeScript, Node.js, Prisma e SQLite para gerenciar pedidos de um bazar online.

## Pré-requisitos

Certifique-se de ter instalado o seguinte antes de prosseguir:

- Node.js (versão recomendada: 12.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- TypeScript
- Prisma CLI

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Couks/API_5SBD
   cd API_5SBD
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados:**

   - Certifique-se de ter o SQLite instalado na sua máquina.
   - Configure a URL do banco de dados em `.env` conforme necessário.

4. **Executar as Migrações do Banco de Dados:**

   ```bash
   npx prisma migrate dev
   ```

   Isso aplicará as migrações pendentes ao banco de dados SQLite.

## Uso

### Rodando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor em `http://localhost:3000` por padrão.

### Scripts Disponíveis

- **`npm run dev`**: Inicia a aplicação em modo de desenvolvimento usando `ts-node-dev`.
- **`npm run build`**: Compila o código TypeScript para JavaScript na pasta `dist/`.
- **`npm start`**: Inicia a aplicação a partir dos arquivos compilados em `dist/`.
- **`npm run migrate`**: Aplica as migrações do banco de dados usando Prisma.
- **`npm run generate`**: Regenera o cliente Prisma baseado no seu schema.

### Estrutura do Projeto

- **`src/`**: Contém o código-fonte da aplicação.
  - **`application/`**: Lógica de aplicação.
  - **`domain/`**: Modelos de domínio e interfaces.
  - **`infrastructure/`**: Implementações de infraestrutura (repositórios Prisma).
  - **`presentation/`**: Controladores e rotas HTTP.
- **`prisma/`**: Configuração do Prisma e migrações de banco de dados.
- **`dist/`**: Código compilado (gerado após `npm run build`).

### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
