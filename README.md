# @boilerz/mongoose-helper

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/boilerz/mongoose-helper/blob/master/LICENSE)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/boilerz/mongoose-helper)](https://www.npmjs.com/package/@boilerz/mongoose-helper)
[![GH CI Action](https://github.com/boilerz/mongoose-helper/workflows/CI/badge.svg)](https://github.com/boilerz/mongoose-helper/actions?query=workflow:CI)

> Mongoose helper.

### Install

```bash
npx install-peerdeps @boilerz/mongoose-helper
```

### Usage

| Name                  | Default                                 | Description                                    |
|-----------------------|-----------------------------------------|------------------------------------------------|
| MONGO_DB_URI          | `http://localhost:27017/REPO_DIRECTORY` | Mongo DB uri                                   |
| MONGO_DB_AUTO_CONNECT |                                         | Will auto connect to the database when `true`. |

### Release

```bash
yarn version
yarn build
yarn publish dist --access public
```
