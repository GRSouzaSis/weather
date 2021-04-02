# weather
Previsões do tempo utilizando a API [https://openweathermap.org/api](https://openweathermap.org/api)

## Tecnologias
  - [Typescript](https://www.typescriptlang.org/)
  - [React.Js](https://pt-br.reactjs.org/)
  - [Next.js](https://nextjs.org/)
  * Para mais detalhes, veja o [package.json](https://github.com/GRSouzaSis/weather/blob/master/package.json)
## Executando
 # Clone este repositório
 $ git clone https://github.com/GRSouzaSis/weather.git

 # Instale as dependências
 $ yarn install

# Crie um arquivo .env na raiz do projeto
  -Copie o conteúdo do arquivo [.env.exemple](https://github.com/GRSouzaSis/weather/blob/master/.env.exemple)
  -Cole dentro do arquivo .env que foi criado
  -Crie uma KEY na API [https://openweathermap.org/api](https://openweathermap.org/api)
  -Conteúdo deve ficar NEXT_PUBLIC_KEY=[SUA_KEY]

 # Execute a aplicação em [http://localhost:3000/](http://localhost:3000/)
 $ yarn dev

 # Caso não compile execute o comando
 $ yarn build para inicializar o Next.js
