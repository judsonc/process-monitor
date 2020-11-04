# Monitor de Processos

Uma aplicação WEB que tem o objetivo de monitorar os processos que estão sendo executados no computador do usuário.
Com ele é possível visualizar o uso dos núcleos da CPU e listar todos os processos em execução, além de filtar pelo nome do processo desejado.

## Páginas

A aplicação apresenta duas páginas:

- Página inicial: mostra o uso dos núcleos da CPU;
- Página de processos: mostra a lista com todos os processos em execução.

Para cada processo é mostrado as seguintes informações:

- PID
- User
- Process
- %CPU
- %Mem
- Priority
- Status

## Demonstração local

Para executar a aplicação localmente, use os comandos abaixo.
Acesse a aplicação em [http://localhost:8000](http://localhost:8000)

```sh
# instalar dependências
$ yarn
# iniciar aplicação
$ yarn start
```

## Módulos utilizados

Foram utilizados os seguintes módulos:

- Systeminformation: [acesse aqui](https://systeminformation.io/)
- Nes.css: [acesse aqui](https://nostalgic-css.github.io/NES.css/)
- socket.io: [acesse aqui](https://socket.io/)
