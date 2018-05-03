1. 设置开发环境
在开始工作之前，你必须设置好开发环境。

如果你的电脑里没有 Node.js®和 npm，请安装它们。

```
npm install -g @angular/cli
```

#### angular/cli 常用命令
<table border="1" width="100%">
    <tr>
        <td>元件</td>
        <td>用法</td>
        <td>简写用法</td>
    </tr>
     <tr>
        <td>Component</td>
        <td>ng g component my-new-component</td>
        <td>ng g c my-new-component</td>
    </tr>
    <tr>
        <td>Directive</td>
        <td>ng g directive my-new-directive</td>
        <td>ng g d my-new-directive</td>
    </tr>
    <tr>
        <td>Pipe</td>
        <td>ng g pipe my-new-pipe</td>
        <td>ng g p my-new-pipe</td>
    </tr>
    <tr>
        <td>Service</td>
        <td>ng g service my-new-service</td>
        <td>ng g s my-new-service</td>
    </tr>
    <tr>
        <td>Class</td>
        <td>ng g class my-new-class</td>
        <td>ng g cl my-new-class</td>
    </tr>
    <tr>
        <td>Guard</td>
        <td>ng g guard my-new-guard</td>
        <td>ng g g my-new-guard</td>
    </tr>
    <tr>
        <td>Interface</td>
        <td>ng g interface my-new-interface</td>
        <td>ng g i my-new-interface</td>
    </tr>
    <tr>
        <td>Enum</td>
        <td>ng g enum my-new-enum</td>
        <td>ng g e my-new-enum</td>
    </tr>
    <tr>
        <td>Module</td>
        <td>ng g module my-module</td>
        <td>ng g m my-module</td>
    </tr>
</table>  

<div style="height:20px"></div>

#### 小知识点

```
ng g module new-module to create a new module
call ng g component new-module/new-component
```

这样会自动把创建的组件、管道添加进指定的模块内部。 

2. 创建新项目
打开终端窗口。

运行下列命令来生成一个新项目以及应用的骨架代码：

```
ng new my-app
```

3. 启动开发服务器
进入项目目录，并启动服务器。

```
cd my-app

ng serve --open
```

ng serve 命令会启动开发服务器，监听文件变化，并在修改这些文件时重新构建此应用。

使用 --open（或 -o）参数可以自动打开浏览器并访问 http://localhost:4200/。

浏览器会自动刷新，并具有修改之后的标题。不错，不过它还可以更好看一点。

### 项目文件概览
Angular CLI 项目是做快速试验和开发企业解决方案的基础。

#### src 文件夹  

你的应用代码位于 src 文件夹中。 所有的 Angular 组件、模板、样式、图片以及你的应用所需的任何东西都在那里。 这个文件夹之外的文件都是为构建应用提供支持用的。
<table border="1" width="100%">
    <tr>
        <td>文件</td>
        <td>用途</td>
    </tr>
     <tr>
        <td>app/app.component.{ts,html,css,spec.ts}</td>
        <td>使用 HTML 模板、CSS 样式和单元测试定义 AppComponent 组件。 它是根组件，随着应用的成长它会成为一棵组件树的根节点。</td>
    </tr>
    <tr>
        <td>app/app.module.ts</td>
        <td>定义 AppModule，根模块为 Angular 描述如何组装应用。 目前，它只声明了 AppComponent。 不久，它将声明更多组件。</td>
    </tr>
     <tr>
        <td>environments/*</td>
        <td>这个文件夹中包括为各个目标环境准备的文件，它们导出了一些应用中要用到的配置变量。 这些文件会在构建应用时被替换。 比如你可能在生产环境中使用不同的 API 端点地址，或使用不同的统计 Token 参数。 甚至使用一些模拟服务。 所有这些，CLI 都替你考虑到了。</td>
    </tr>
    <tr>
        <td>favicon.ico</td>
        <td>每个网站都希望自己在书签栏中能好看一点。 请把它换成你自己的图标。</td>
    </tr>
    <tr>
        <td>index.html</td>
        <td>这是别人访问你的网站是看到的主页面的 HTML 文件。 大多数情况下你都不用编辑它。 在构建应用时，CLI 会自动把所有 js 和 css 文件添加进去，所以你不必在这里手动添加任何 &lt;script\&gt; 或 &lt;link\&gt; 标签。</td>
    </tr>
    <tr>
        <td>main.ts</td>
        <td>这是应用的主要入口点。 使用JIT 编译器编译本应用，并启动应用的根模块 AppModule，使其运行在浏览器中。 你还可以使用AOT 编译器，而不用修改任何代码 —— 只要给 ng build 或 ng serve 传入 --aot 参数就可以了。</td>
    </tr>
    <tr>
        <td>polyfills.ts</td>
        <td>不同的浏览器对 Web 标准的支持程度也不同。 腻子脚本（polyfill）能把这些不同点进行标准化。 你只要使用 core-js 和 zone.js 通常就够了，不过你也可以查看浏览器支持指南以了解更多信息。</td>
    </tr>
    <tr>
        <td>styles.css</td>
        <td>这里是你的全局样式。 大多数情况下，你会希望在组件中使用局部样式，以利于维护，不过那些会影响你整个应用的样式你还是需要集中存放在这里。</td>
    </tr>
    <tr>
        <td>test.ts</td>
        <td>这是单元测试的主要入口点。 它有一些你不熟悉的自定义配置，不过你并不需要编辑这里的任何东西。</td>
    </tr>
    <tr>
        <td>tsconfig.{app|spec}.json</td>
        <td>TypeScript 编译器的配置文件。tsconfig.app.json 是为 Angular 应用准备的，而 tsconfig.spec.json 是为单元测试准备的。</td>
    </tr>
</table>    

<div style="height:20px"></div>

#### 根目录  

src/ 文件夹是项目的根文件夹之一。 其它文件是用来帮助你构建、测试、维护、文档化和发布应用的。它们放在根目录下，和 src/ 平级。

<table border="1" width="100%">
    <tr>
        <td>文件</td>
        <td>用途</td>
    </tr>
     <tr>
        <td>e2e/</td>
        <td>在 e2e/ 下是端到端（end-to-end）测试。 它们不在 src/ 下，是因为端到端测试实际上和应用是相互独立的，它只适用于测试你的应用而已。 这也就是为什么它会拥有自己的 tsconfig.json。</td>
    </tr>
     <tr>
        <td>node_modules/</td>
        <td>Node.js 创建了这个文件夹，并且把 package.json 中列举的所有第三方模块都放在其中。</td>
    </tr>
     <tr>
        <td>a.angular-cli.json</td>
        <td>Angular CLI 的配置文件。 在这个文件中，你可以设置一系列默认值，还可以配置项目编译时要包含的那些文件。 要了解更多，请参阅它的官方文档。</td>
    </tr>
     <tr>
        <td>.editorconfig</td>
        <td>给你的编辑器看的一个简单配置文件，它用来确保参与你项目的每个人都具有基本的编辑器配置。 大多数的编辑器都支持 .editorconfig 文件，详情参见 http://editorconfig.org 。</td>
    </tr>
     <tr>
        <td>.gitignore</td>
        <td>一个 Git 的配置文件，用来确保某些自动生成的文件不会被提交到源码控制系统中。</td>
    </tr>
     <tr>
        <td>karma.conf.js</td>
        <td>给Karma的单元测试配置，当运行 ng test 时会用到它。</td>
    </tr>
     <tr>
        <td>package.json</td>
        <td>npm 配置文件，其中列出了项目使用到的第三方依赖包。 你还可以在这里添加自己的自定义脚本。</td>
    </tr>
     <tr>
        <td>protractor.conf.js</td>
        <td>给Protractor使用的端到端测试配置文件，当运行 ng e2e 的时候会用到它。</td>
    </tr>
    <tr>
        <td>README.md</td>
        <td>项目的基础文档，预先写入了 CLI 命令的信息。 别忘了用项目文档改进它，以便每个查看此仓库的人都能据此构建出你的应用。</td>
    </tr>
    <tr>
        <td>tsconfig.json</td>
        <td>TypeScript 编译器的配置，你的 IDE 会借助它来给你提供更好的帮助。</td>
    </tr>
    <tr>
        <td>tslint.json</td>
        <td>使用 HTML 模板、CSS 样式和单元测试定义 AppComponent 组件。 它是根组件，随着应用的成长它会成为一棵组件树的根节点。</td>
    </tr>
    <tr>
        <td>app/app.component.{ts,html,css,spec.ts}</td>
        <td>给TSLint和Codelyzer用的配置信息，当运行 ng lint 时会用到。 Lint 功能可以帮你保持代码风格的统一。</td>
    </tr>
</table>

<div style="height:20px"></div>