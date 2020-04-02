## Como Criar Projeto Express
```
git init
```

### Ligar npm
```
npm init
```

### Adicionar o Start ao package.json
```
"start": "node index.js" 
```

### Criar git ignore (para a pasta node_modules não ser uploaded)
```
node_modules
```

### Copiar Pastas routes|database|server

### Criar config.json
```
{
    "host":"localhost",
    "port":3000,
    "serverStartMessage":"Example app listening at http://%s:%s"
}
```

### Instalar Bibliotecas
```
npm install express
npm install body-parser
```