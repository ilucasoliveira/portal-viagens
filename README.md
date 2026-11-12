# Bora — Portal de viagens

Projeto de estudo em **Next.js, React e TypeScript**, com App Router, componentes reutilizáveis e CSS Modules. Apresenta quatro destinos brasileiros, com fotografias locais e páginas individuais.

## Executar

Pré-requisito: Node.js 20.9 ou superior e npm. Validado com Node.js 24.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

O `package-lock.json` fixa a instalação usada no projeto. Não é necessário configurar variáveis de ambiente nem uma API. As fotos estão incluídas em `public/images`.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/app/layout.tsx` | Layout raiz e metadados; aplica o componente Layout em todas as páginas |
| `src/app/page.tsx` | Apresentação do portal em `/` |
| `src/app/destinos/page.tsx` | Listagem em `/destinos`, renderizada com `map()` |
| `src/app/destinos/[id]/page.tsx` | Página dinâmica de cada destino |
| `src/app/not-found.tsx` | Página para endereços inexistentes |
| `src/components/Layout.tsx` | Cabeçalho, conteúdo principal e rodapé reutilizáveis |
| `src/components/Menu.tsx` | Navegação com `next/link` e indicação da seção atual |
| `src/components/CardDestino.tsx` | Card reutilizável com nome, imagem e link |
| `src/data/destinos.ts` | Array local e busca de destino pelo id |
| `src/types/destino.ts` | Interface TypeScript dos dados |
| `src/styles/Portal.module.css` | Estilos encapsulados das páginas |
| `public/images` | Fotografias incluídas no projeto |

Os componentes também têm seus próprios arquivos `.module.css`. O CSS global contém apenas estilos básicos e de acessibilidade.

## Como as rotas funcionam

No App Router, cada arquivo `page.tsx` cria uma página de acordo com sua pasta. A pasta `[id]` recebe uma parte variável do endereço, como `/destinos/salvador`. A página busca o destino no array local e chama `notFound()` quando o identificador não existe. `generateStaticParams()` prepara os quatro destinos durante a compilação. Os parâmetros são recebidos como uma Promise e lidos com `await`, conforme a API da versão utilizada.

`Layout` envolve o conteúdo pelo layout raiz, portanto cabeçalho e rodapé são reutilizados inclusive nas páginas individuais. Apenas `Menu` precisa de `use client`, pois consulta o caminho atual com `usePathname`.

## Conferência da atividade

- [x] Página inicial com apresentação e link para destinos.
- [x] Listagem com quatro destinos e renderização com `map()`.
- [x] Array local com `id`, `nome`, `imagem` e `descricao`.
- [x] `CardDestino` tipado e reutilizável.
- [x] `Layout` compartilhado com header e footer.
- [x] Navegação interna com `next/link`.
- [x] CSS Modules e layout responsivo.
- [x] Arquivos `.tsx` e `.ts`.
- [x] Extra: rotas dinâmicas e página de destino inexistente.
- [ ] Publicar em um repositório público no GitHub.

## Publicar no GitHub

1. Extraia o ZIP e abra a pasta `portal-viagens` no terminal.
2. No GitHub, crie um repositório **público** chamado `portal-viagens`, sem adicionar README, licença ou `.gitignore` (os arquivos locais já estão preparados).
3. Execute, substituindo `SEU-USUARIO` pelo seu usuário:

```bash
git init
git add .
git commit -m "Cria portal de viagens em Next.js"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portal-viagens.git
git push -u origin main
```

Se já existir um remote `origin`, confira com `git remote -v` e use `git remote set-url origin https://github.com/SEU-USUARIO/portal-viagens.git` em vez de adicioná-lo novamente.

Entregue o endereço público do repositório. Não envie `node_modules` nem `.next`; o `.gitignore` já exclui esses diretórios.

## Roteiro de verificação

1. Abra `/` e use o botão “Explorar destinos”.
2. Confira os quatro cards em `/destinos`.
3. Abra cada card e volte pela navegação.
4. Acesse `/destinos/inexistente` e confira a mensagem de página não encontrada.
5. Reduza a tela para verificar a listagem em uma coluna no celular.
6. Navegue com Tab para conferir o foco visível e o link “Pular para o conteúdo”.

## Referências e imagens

- [Rotas dinâmicas — documentação do Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
- [Créditos, fontes e licenças das fotografias](CREDITOS-IMAGENS.md)

As fotografias mantêm suas licenças próprias. Não é uma plataforma de reservas; o conteúdo é demonstrativo e não informa preços ou disponibilidade.
