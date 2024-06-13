# Use a imagem base do Node 22-alpine3.19
FROM node:22-alpine3.19

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que a aplicação React vai rodar
EXPOSE 3000

# Comando para iniciar o aplicativo React
CMD ["npm", "start"]
