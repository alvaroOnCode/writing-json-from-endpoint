# 🧑‍💻 Writing JSON from endpoint 🧑‍💻 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

Writing JSON files in choosen directory given a JavaScript objects array.

## ⚙️ How To

* **Input**

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

* **Output**

Set options in `config.output` object in `index.js`:

- `clearOnInit | boolean` Use this to remove all existing files in output directory.
- `dir | string` Use this to set output folder. 
- Modify ***Custom ignores*** in `.gitignore` in case you prefer tracking outputs in repository.

## 📈 Roadmap

- Not creating `json` file if endpoint does not exist.

## 🌍 Languages

- 🇺🇸 English

## Powered by

[NodeJS](https://nodejs.org/).

## This README.md file looks pretty thanks to

[GitHub Markdown](https://guides.github.com/features/mastering-markdown/) \
[Emojipedia](https://emojipedia.org/)
