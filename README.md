# Leadster · Videos landing page (Test Front)
Repositório dedicado para aplicação do teste para Front-end Developer na Leadster. 🚀

![cover-leadster-test-dev](https://github.com/justhenrique/leadster-landing-page/assets/54003876/11d0e8a8-4a6b-49d7-a26c-1f852be8a5f5)


## 🌐 Site Online: 
https://leadster-landing-page.vercel.app/


### 1. Decisões tomadas:
Como se tratava apenas de uma página, cada sessão da Home foi divida em um componente e seus sub-componentes, para facilitar em eventuais manuntenções. Como deve ser, também foi realizado a componentização de elementos que eram utilizados em mais um lugar para reaproveitamento do código. Para os vídeos, aproveitei o canal do YouTube da Leadster para criar um espécie de API em um arquivo JSON para a consulta dos dados e paginação. No site atual da empresa utilizei mais alguns complementos para ajudar no desenvolvimento deste, como links do footer, imagens svg e outros. Aplicação bem tranquila, realizada em cerca de 2 dias. 


### 2. Como o código foi organizado:
A página principal está anexada no index do app como Home, sendo importada de 'Pages'. Home tem seus componentes próprios, mas também utiliza de componentes compartilhados que são utilizados em outros pontos. O restante se encontra na pasta 'Shared' onde é possível encontrar todos os recursos compartilhados da aplicação organizado e categorizados em sub-pastas. 


## 🚀 Build

1. É necessário ter os seguintes requisitos pré-instalados
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)

<br />

2. No seu terminal clone o repositório 

```
git clone https://github.com/justhenrique/leadster-landing-page/git
```

3. Acesse a pasta
```
cd leadster-landing-page
```

4. Instale as dependências
```
npm install
```

5. Rode o site
```
npm run dev
```

6. O site estará disponível no localhost padrão
