<h1 align="center">  🍕 Tony Pizzaria 🍕 </h1>
<div align="center">  
<img src="https://img.shields.io/badge/Node.js-fa68bf?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-8b47ec?style=for-the-badge&logo=javascript&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-67bed9?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-7ec52f?style=for-the-badge&logo=vercel&logoColor=white" />
</div>


## Descrição 🌺
- API desenvolvida com Node.js
- Retorna informações como categorias, usuários e pizzas
- Métodos disponíveis: GET


## Como utilizar 🪻


> **URL Base:** https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app


Endpoints       |
:------------------:|
/usuarios           |  
/usuario/:id        |
/categorias/        |
/pizzas/            | 
/pizzas/favoritas   |  
/pizza/:id          |
/comentarios/:id    |
/bebidas            |

## Exemplo de uso 🍀 

```
const response = await fetch('https://back-end-tony-pizzaria-qsx6e80e6-ryan-alves-projects.vercel.app/usuarios')
```

### Resposta

```
{
  "usuarios": [
    {
      "id": 1,
      "nome": "Ryan",
      "email": "ryan@gmail.com",
      "senha": "1234"
    }
  ],
  "quantidade": 1
}
```

## Desenvolvimento local 🌼

### Uso simples

```
npm run start
```
