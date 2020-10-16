# 🧑‍💻 Writing JSON from endpoint 🧑‍💻 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

Writing `json` files in choosen directory given a JavaScript object array.

## ⚙️ How To

* Input

Set array in `src/utils/endpoints.js` like this:

```javascript
const endpoints = [
  {
    hostname: '',
    path: ''
  },
  {
    hostname: '',
    path: ''
  },
];
```

* Output

Set options in `config.output` object in `index.js`:

    - `clearOnInit | boolean`: Use this to remove all existing files in output directory.
    - `dir | string`: Use this to set output folder. 

## 📈 Roadmap

    - Not creating `json` file if endpoint does not exist.

## 🌍 Languages

- 🇺🇸 English

## Powered by

[NodeJS](https://nodejs.org/).

## This README.md file looks pretty because of

[GitHub Markdown](https://guides.github.com/features/mastering-markdown/) \
[Emojipedia](https://emojipedia.org/)
