# monorepo-cra-template

Template that uses CRA in the Monorepo environment.

## Roadmap

- [x] CRA package setting
- [x] dependency setting
- [ ] Automate package generation based on template

## Getting Started

### Make new package

- Copy `template` directory and paste in `./packages`
- Rename directory, name(in package.json)

### Development

```sh
npm install

# development
# Select 1 or 2
# 1
cd packages/$YOUR_PACKAGE
npm run start
# 2
npm run start --workspace=@mono/$YOUR_PACKAGE
```

### Modify CRA settings

You can be modified using `craco.config.js`.
See the [craco documentation](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md).

## Stack

### Main

- typescript
- react
- ant-design

### Others

- emotion
- tailwindcss
- react-query
- axios
- git-cz
