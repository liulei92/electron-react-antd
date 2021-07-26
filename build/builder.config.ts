/**
 * electron-builder configuration
 * https://www.electron.build/configuration/configuration
 */

import path from 'path'
import { Configuration, CliOptions } from 'electron-builder'
import buildConfig from './config'

const ICON_ICO = path.resolve(__dirname, '../assets/app-icon/icon/icon.ico')
const ICON_ICNS = path.resolve(__dirname, '../assets/app-icon/icon/icon.icns')

const {
  npm_package_name: productName,
  npm_package_buildVersion: buildVersion,
  npm_package_appId: appId,
  npm_package_version: version,
} = process.env

const config: Configuration = {
  productName, // 项目名 这也是生成的exe文件的前缀名
  buildVersion,
  appId, // 包名 com.xxx.xxxxx
  copyright: '2021', //版权  信息
  files: ['dist', 'assets', 'package.json'],
  asar: false,
  directories: {
    buildResources: 'assets',
    output: path.join(buildConfig.release),
    // output: path.join(buildConfig.release, `${productName}-release-${version}.${buildVersion}`),
  },
  win: {
    icon: ICON_ICO,
    target: ['nsis', 'zip'],
  },
  nsis: {
    shortcutName: productName, // 图标名称
    oneClick: false, // 是否一键安装
    perMachine: true,
    allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
    allowToChangeInstallationDirectory: true, // 允许修改安装目录
    installerIcon: ICON_ICO, // 安装图标
    uninstallerIcon: ICON_ICO, //卸载图标
    installerHeaderIcon: ICON_ICO, // 安装时头部图标
    createDesktopShortcut: true, // 创建桌面图标
    createStartMenuShortcut: true, // 创建开始菜单图标
    // include: 'build/script/installer.nsh', // 包含的自定义nsis脚本 这个对于构建需求严格得安装过程相当有用
  },
  mac: {
    icon: ICON_ICNS,
  },
  dmg: {
    icon: ICON_ICNS,
    contents: [
      { x: 130, y: 220 },
      { x: 410, y: 220, type: 'link', path: '/Applications' },
    ],
  },
  linux: {
    icon: ICON_ICNS,
    target: ['deb', 'AppImage'],
    // category: 'Development',
  },
  // 更新配置
  // publish: [
  //   {
  //     provider: 'generic', // 服务器提供商 也可以是GitHub等等
  //     url: 'http://xxxxx/', // 服务器地址
  //   },
  // ],
}

const packageConfig: CliOptions = {
  config,
}

export default packageConfig

// https://github.com/QDMarkMan/CodeBlog/blob/master/Electron/electron-builder%E6%89%93%E5%8C%85%E8%AF%A6%E8%A7%A3.md

// electron-builder build                    构建命名                      [default]
// electron-builder install-app-deps         下载app依赖
// electron-builder node-gyp-rebuild         重建自己的本机代码
// electron-builder create-self-signed-cert  为Windows应用程序创建自签名代码签名证书
// electron-builder start                    使用electronic-webpack在开发模式下运行应用程序(须臾要electron-webpack模块支持)

// --mac, -m, -o, --macos   Build for macOS,                              [array]
// --linux, -l              Build for Linux                               [array]
// --win, -w, --windows     Build for Windows                             [array]
// --x64                    Build for x64 (64位安装包)                     [boolean]
// --ia32                   Build for ia32(32位安装包)                     [boolean]
// --armv7l                 Build for armv7l                              [boolean]
// --arm64                  Build for arm64                               [boolean]
// --dir                    Build unpacked dir. Useful to test.           [boolean]
// --prepackaged, --pd      预打包应用程序的路径（以可分发的格式打包）
// --projectDir, --project  项目目录的路径。 默认为当前工作目录。
// --config, -c             配置文件路径。 默认为`electron-builder.yml`（或`js`，或`js5`)

// --publish, -p  发布到GitHub Releases [choices: "onTag", "onTagOrDraft", "always", "never", undefined]
