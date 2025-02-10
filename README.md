# Mently FE Test

A Next.js + Tailwind CSS project built to demonstrate frontend skills in a single-page design challenge provided by Mently.  
<br/>

## **Table of Contents**
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Project Structure](#project-structure)
- [Scripts & Usage](#scripts--usage)
- [Testing](#testing)
- [Author](#author)
- [License](#license)

<br/>

## **Overview**
This repository contains a single-page application that follows the provided Figma designs for both **desktop** and **mobile**. The challenge was to:
- Implement the page using **Next.js** & **Tailwind CSS**.
- Ensure **responsiveness** and **accessibility**.
- Write **clean, maintainable code**.
- (Optional) Include animations, interactions, and unit tests.

<br/>

## **Tech Stack**
- **Next.js** 13+ (App Router)
- **TypeScript** for static typing
- **Tailwind CSS** for styling
- **React Testing Library** + **Jest** for testing

<br/>

## **Setup & Installation**
1. **Clone** this repository:
   ```bash
   git clone https://github.com/Arinze999/mentlyFEtest.git

cd mentlyFEtest
npm install

npm run dev

<br/>

## **project folder structure**

mentlyFEtest/
├─ .next/                      # Auto-generated Next.js build output
├─ node_modules/               # Dependencies
├─ public/                     # Static assets (images, icons, etc.)
├─ src/
│  └─ app/
│     ├─ components/           # Reusable Components
│     │  ├─ ProgramInformation/...
│     │  ├─ ProgramDisplay/...
│     │  ├─ ...
│     ├─ globals.css           # Global styles (Tailwind base imports)
│     ├─ layout.tsx            # Root Layout in Next.js 13+ App Router
│     ├─ page.tsx              # Home page
│     └─ utils.ts              # Utility functions
├─ .gitignore
├─ eslint.config.js
├─ jest.config.js
├─ jest.setup.ts
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.json
└─ README.md                   # This readme file

npm run dev

npm run build

npm run start

npm run lint

<br/>

## **testing**

npm test

npm test -- --coverage
