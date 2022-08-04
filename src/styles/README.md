# Nessa pasta estão todos os arquivos de estilização

Na pasta **template** estão os arquivos do template [**Dashforge**](http://themepixels.me/demo/dashforge1.1/)
A única alteração foi no caminho relativo para as pastas que estão em **node_modules**

Além disso, é preciso instalar dois pacotes e modificar dois arquivos para utilizar a utilização

- "bootstrap": "^4.5.0"
- "jquery": "^3.3.1"

- public/index.html
- src/index.tsx

Em public/index.html:

```html
<head>
  ...
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.0/css/ionicons.min.css" crossorigin="anonymous" />
</head>
```

```html
<body>
  ...
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.0/perfect-scrollbar.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.min.js" crossorigin="anonymous"></script>
  <script src="%PUBLIC_URL%/assets/js/dashforge.js"></script>
  <script src="%PUBLIC_URL%/assets/js/dashforge.aside.js"></script>
</body>
```

Em src/index.tsx:

```typescript
import "react-toastify/dist/ReactToastify.css";
import "styles/template/dashforge.scss";
import "styles/template/pages/auth.scss";
import "styles/template/pages/calendar.scss";
import "styles/template/pages/chat.scss";
import "styles/template/pages/contacts.scss";
import "styles/template/pages/dashboard.scss";
import "styles/template/pages/demo.scss";
import "styles/template/pages/filemgr.scss";
import "styles/template/pages/mail.scss";
import "styles/template/pages/profile.scss";
import "styles/customize.scss";
```

Caso seja necessário a criação de um arquivo de estilização, crie um arquivo chamado de styles.tsx ou styles.scss (de acordo com sua necessidade). Apenas tome cuidade para que o nome da classe não seja conflitante com alguma outra classe já criada. Uma dica é criar a classe da seguindo o padrão [BEM](http://getbem.com/naming/) com um pequena diferença, colocando o nome do projeto seguido pelo nome da página/componente como prefixo, como a seguir:

```css
.aule-dashboard-form {
  height: 100%;
}
.aule-dashboard-form__submit {
  background-color: green;
}

.aule-dashboard-form__submit--disabled {
  display: none;
}
```

Nesse ponto, styled-componentes realmente dá uma vantagem, mas a velocidade de desenvolvimento proporcionada por um template já pronto compensa em muito essa desvantagem.
