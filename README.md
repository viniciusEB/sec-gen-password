# Sec Pass Generator 🔐

Aplicativo mobile de geração de senhas, desenvolvido com **React Native**, **Expo** e **TypeScript**.

## Funcionalidades

- Geração de senhas aleatórias
- Botão para copiar a senha para a área de transferência
- **Tamanho configurável:** o usuário define a quantidade de caracteres da senha (entre 1 e 64)
- **Feedback visual nos botões:** os botões mudam de cor enquanto estão pressionados e voltam à cor original quando soltos
- **Feature extra (tarefa 3): misturar maiúsculas e minúsculas** — um switch permite escolher se a senha terá letras maiúsculas e minúsculas misturadas (ligado, padrão) ou apenas minúsculas (desligado)

## Tecnologias

- React Native + Expo
- TypeScript
- expo-clipboard

## Como executar

    npm install
    npm run start

Depois, escaneie o QR Code com o Expo Go ou abra no emulador Android.

## Estrutura

- `App.tsx`: ponto de entrada do app
- `src/screens/Home.tsx`: tela principal
- `src/components/`: componentes (Logo, ButtonPass, TextInputPass)
- `src/services/passwordService.ts`: lógica de geração da senha
