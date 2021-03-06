## Thanks

```
Thanks to the author lanten's Demo; this program was forked from "https://github.com/lanten/electron-antd"
```
## Quick start
install
```bash
yarn
# or
npm install
```

start dev
```bash
npm run dev
```

## Overview
- webpack
- electron
- electron-builder
- electron-log
- react
- react-router
- redux
- ant-design
- remixicon
- less
- typescript
- eslint
- prettier

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Build package

Modify [builder.config.ts](./build/builder.config.ts) to edit package info.

For a full list of options see: https://www.electron.build/configuration/configuration

Create a package for OSX, Windows and Linux
```
npm run build
```

Please check the `release` folder after the build is complete.

## Git Actions
[Actions](https://zhuanlan.zhihu.com/p/164901026)

## License
[MIT](./LICENSE)

## GIT
```
git commit -am "update yaml"

git tag -a v1.0.01 -m "update yaml"
git tag -d v1.0.01 删除本地tag
git push origin :refs/tags/v1.0.01 删除远程tag

git push && git push origin v1.0.01

```