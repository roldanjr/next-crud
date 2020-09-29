![Project Preview](preview.PNG)

# Table of Content

- [Table of Content](#table-of-content)
  - [1. Folder Structures](#1-folder-structures)
  - [2. Libraries & Frameworks](#2-libraries--frameworks)
  - [3. Installation & Set Up](#3-installation--set-up)
  - [4. License](#4-license)

## 1. Folder Structures

```bash
+---components
+---icons
+---models
+---pages
|   \---api
|       \---employees
+---store
|   +---actions
|   +---reducers
|   \---sagas
+---styles
\---utils
```

## 2. Libraries & Frameworks

| Name                                            | Description                                                            |
| ----------------------------------------------- | ---------------------------------------------------------------------- |
| [NextJS](https://nextjs.org/)                   | The React Framework for Production.                                    |
| [ReactJS](https://reactjs.org/)                 | A JavaScript library for building user interfaces.                     |
| [Redux](https://redux.js.org/)                  | A Predictable State Container for JS Apps.                             |
| [Redux Saga](https://redux-saga.js.org/)        | A middleware used to handle side effects in Redux.                     |
| [React Hook Form](https://react-hook-form.com/) | Performant, flexible and extensible forms with easy-to-use validation. |
| [Mongoose](https://mongoosejs.com/)             | Elegant mongodb object modeling for node.js                            |

## 3. Installation & Set Up

1. Install project dependencies

```bash
  yarn install or npm install
```

2. Add environment variables on your `.env.local`

```env
  MONGO_URI=
```

3. Start the development server

```bash
  yarn dev or npm run dev
```

4. Build for production

```bash
  yarn build or npm run build
```

5. Run production mode

```bash
  yarn start or npm start
```

## 4. License

MIT © [Roldan Montilla Jr](https://github.com/roldanjr)
