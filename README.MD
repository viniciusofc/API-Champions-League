Claro! Aqui está um README bem básico para a sua API:

# API Champions League

Esta API fornece informações sobre jogadores e clubes da UEFA Champions League.

## Tecnologias

- Node.js
- Express
- TypeScript

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   npm start
   ```

## Endpoints

- **Obter Todos os Jogadores**: `GET /players`
- **Obter Jogador por ID**: `GET /players/:id`
- **Obter Todos os Clubes**: `GET /clubs`

## Modelos de Dados

### PlayerModel

```typescript
{
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: {
        Overall: number;
        Pace: number;
        Shooting: number;
        Passing: number;
        Dribbling: number;
        Defending: number;
        Physical: number;
    };
}
```

### ClubModel

```typescript
{
    id: number;
    name: string;
}
```

## Licença

Este projeto está licenciado sob a MIT License.

