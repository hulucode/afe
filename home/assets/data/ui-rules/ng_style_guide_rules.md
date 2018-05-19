 ### 风格词汇
每个指导原则都会描述好的或者坏的做法，所有指导原则风格一致。

指导原则中使用的词汇表明推荐的程度。

坚持意味着总是应该遵循的约定。 说"总是"可能显得有点绝对，应该"总是"遵循的指导原则非常少，但是，只有遇到非常不寻常的情况才能打破坚持的原则。

考虑标志着通常应该遵循的指导原则。 如果你能完全理解指导原则背后的含义，并且很好的理由背离它，那就可以改变它。但是请保持一致。

避免标志着你决不应该做的事。需要避免的代码范例会有明显的红色标题。

为何？会给出随后的建议的理由。

### 文件结构约定
在一些代码例子中，有的文件有一个或多个相似名字的配套文件。（例如 hero.component.ts 和 hero.component.html）。

本指南将会使用像 hero.component.ts|html|css|spec 的简写来表示上面描述的多个文件，目的是保持本指南的简洁性，增加描述文件结构时的可读性。

### 单一职责
坚持每个文件只定义一样东西（例如服务或组件）。

考虑把文件大小限制在 400 行代码以内。

为何？单组件文件非常容易阅读、维护，并能防止在版本控制系统里与团队冲突。

为何？单组件文件可以防止一些隐蔽的程序缺陷，当把多个组件合写在同一个文件中时，可能造成共享变量、创建意外的闭包，或者与依赖之间产生意外耦合等情况。

为何？单独的组件通常是该文件默认的导出，可以用路由器实现按需加载。

最关键的是，可以增强代码可重用性和阅读性，减少出错的可能性。

下面的负面例子定义了 AppComponent，它来引导应用程序，定义了 Hero 模型对象，并从服务器加载了英雄 ... 所有都在同一个文件。 不要这么做。

```
/* avoid */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';

class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    `,
  styleUrls: ['app/app.component.css']
})
class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  heroes: Hero[] = [];

  ngOnInit() {
    getHeroes().then(heroes => this.heroes = heroes);
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

const HEROES: Hero[] = [
  {id: 1, name: 'Bombasto'},
  {id: 2, name: 'Tornado'},
  {id: 3, name: 'Magneta'},
];

function getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES); // TODO: get hero data from the server;
}
```

最好将组件及其支撑部件重新分配到独立的文件。

随着应用程序的成长，本法则会变得越来越重要。

### 小函数
坚持定义简单函数

考虑限制在 75 行之内。

为何？简单函数更易于测试，特别是当它们只做一件事，只为一个目的服务时。

为何？简单函数促进代码重用。

为何？简单函数更易于阅读。

为何？简单函数更易于维护。

为何？简单函数可避免易在大函数中产生的隐蔽性错误，例如与外界共享变量、创建意外的闭包或与依赖之间产生意外耦合等。

### 命名
命名约定对可维护性和可读性非常重要。本指南为文件名和符号名推荐了一套命名约定。

#### 总体命名原则
坚持所有符号使用一致的命名规则。

坚持遵循同一个模式来描述符号的特性和类型。推荐的模式为 feature.type.ts。

为何？命名约定提供了一致的方式来查找内容，让你一眼就能找到。 项目的一致性是至关重要的。团队内的一致性也很重要。整个公司的一致性会提供惊人的效率。

为何？命名约定帮助你更快得找到想找的代码，也更容易理解它。

为何？目录名和文件名应该清楚的传递它们的意图。 例如，app/heroes/hero-list.component.ts 包含了一个用来管理英雄列表的组件。

#### 使用点和横杠来分隔文件名
坚持 在描述性名字中，用横杠来分隔单词。

坚持使用点来分隔描述性名字和类型。

坚持遵循先描述组件特性，再描述它的类型的模式，对所有组件使用一致的类型命名规则。推荐的模式为 feature.type.ts。

坚持使用惯用的后缀来描述类型，包括 *.service、*.component、*.pipe、.module、.directive。 必要时可以创建更多类型名，但必须注意，不要创建太多。

为何？类型名字提供一致的方式来快速的识别文件中有什么。

为何？ 利用编辑器或者 IDE 的模糊搜索功能，可以很容易地找到特定文件。

为何？ 像 .service 这样的没有简写过的类型名字，描述清楚，毫不含糊。 像 .srv, .svc, 和 .serv 这样的简写可能令人困惑。

为何？为自动化任务提供模式匹配。

#### 符号名与文件名
坚持为所有东西使用一致的命名约定，以它们所代表的东西命名。

坚持使用大写驼峰命名法来命名类。符号名匹配它所在的文件名。

坚持在符号名后面追加约定的类型后缀（例如 Component、Directive、Module、Pipe、Service）。

坚持在符号名后面追加约定的类型后缀（例如 .component.ts、.directive.ts、.module.ts、.pipe.ts、.service.ts）。

坚持在文件名后面追加约定的类型后缀（例如 .component.ts、.directive.ts、.module.ts、.pipe.ts、.service.ts）。

为何？遵循一致的约定可以快速识别和引用不同类型的资产。

<table border="1">
    <tr>
        <td>符号名</td>
        <td>文件名</td>
    </tr>
    <tr>
        <td>@Component({ ... })
export class AppComponent { }</td>
        <td>app.component.ts</td>
    </tr>
    <tr>
        <td>@Directive({ ... })
export class ValidationDirective { }</td>
        <td>validation.directive.ts</td>
    </tr>
    <tr>
        <td>@NgModule({ ... })
export class AppModule</td>
        <td>app.module.ts</td>
    </tr>
     <tr>
        <td>@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform { }</td>
        <td>init-caps.pipe.ts</td>
    </tr>
     <tr>
        <td>@Injectable()
export class UserProfileService { }</td>
        <td>user-profile.service.ts</td>
    </tr>
</table>

#### 服务名
坚持使用一致的规则命名服务，以它们的特性来命名。

坚持为服务的类名加上 Service 后缀。 例如，获取数据或英雄列表的服务应该命名为 DataService 或 HeroService。

有些词汇显然就是服务，比如那些以“-er”后缀结尾的。比如把记日志的服务命名为 Logger 就比 LoggerService 更好些。需要在你的项目中决定这种特例是否可以接受。 但无论如何，都要尽量保持一致。

为何？提供一致的方式来快速识别和引用服务。

为何？像 Logger 这样的清楚的服务名不需要后缀。

为何？像 Credit 这样的，服务名是名词，需要一个后缀。当不能明显分辨它是服务还是其它东西时，应该添加后缀。

#### 引导
坚持把应用的引导程序和平台相关的逻辑放到名为 main.ts 的文件里。

坚持在引导逻辑中包含错误处理代码。

避免把应用逻辑放在 main.ts 中，而应放在组件或服务里。

为何？应用的启动逻辑遵循一致的约定。

为何？这是从其它技术平台借鉴的常用约定。

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule }              from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
```

#### 指令选择器
坚持使用小驼峰命名法来命名指令的选择器。

为何？保持指令中定义的属性名与绑定的视图 HTML 属性名字一致。

为何？Angular HTML 解析器是大小写敏感的，它识别小写驼峰写法。

#### 为组件添加自定义前缀
坚持使用带连字符的小写元素选择器值（例如 admin-users）。

坚持为组件选择器添加自定义前缀。 例如，toh 前缀表示 Tour of Heroes（英雄指南），而前缀 `admin 表示管理特性区。

坚持使用前缀来识别特性区或者应用程序本身。

为何？防止与其它应用中的组件和原生 HTML 元素发生命名冲突。

为何？更容易在其它应用中推广和共享组件。

为何？组件在 DOM 中更容易被区分出来。

```
@Component({
  selector: 'admin-users'
})
export class UsersComponent {}
```

#### 为指令添加自定义前缀
坚持为指令的选择器添加自定义前缀（例如前缀 toh 来自 Tour of Heroes）。

坚持用小驼峰形式拼写非元素选择器，除非该选择器用于匹配原生 HTML 属性。

为何？防止名字冲突。

为何？指令更加容易被识别。

```
@Directive({
  selector: '[tohValidate]'
})
export class ValidateDirective {}
```

#### 管道名
坚持为所有管道使用一致的命名约定，用它们的特性来命名。

为何？提供一致方式快速识别和引用管道。

```
@Pipe({ name: 'ellipsis' })
export class EllipsisPipe implements PipeTransform { }
```

#### 单元测试文件名
坚持测试规格文件名与被测试组件文件名相同。

坚持测试规格文件名添加 .spec 后缀。

为何？提供一致的方式来快速识别测试。

为何？提供一个与 karma 或者其它测试运行器相配的命名模式。

````
heroes.component.spec.ts
````

#### 端到端（E2E）测试的文件名
坚持端到端测试规格文件和它们所测试的特性同名，添加 .e2e-spec 后缀。

为何？提供一致的方式快速识别端到端测试文件。

为何？提供一个与测试运行器和构建自动化匹配的模式。

````
app.e2e-spec.ts
````

#### Angular NgModule 命名
坚持为符号名添加 Module 后缀

坚持为文件名添加 .module.ts 扩展名。

坚持用特性名和所在目录命名模块。

为何？提供一致的方式来快速标识和引用模块。

为何？大驼峰命名法是一种命名约定，用来标识可用构造函数实例化的对象。

为何？很容易就能看出这个模块是同名特性的根模块。

坚持为 RoutingModule 类名添加 RoutingModule 后缀。

坚持为 RoutingModule 的文件名添加 -routing.module.ts 后缀。

为何？RoutingModule 是一种专门用来配置 Angular 路由器的模块。 “类名和文件名保持一致”的约定使这些模块易于发现和验证。

<table border="1">
  <tr>
    <td>符号名</td>
    <td>文件名</td>
  </tr>
   <tr>
    <td>@NgModule({ ... })
export class AppModule { }</td>
    <td>app.module.ts</td>
  </tr>
   <tr>
    <td>@NgModule({ ... })
export class AppRoutingModule { }</td>
    <td>app-routing.module.ts</td>
  </tr>
</table>

### 编程约定
坚持一致的编程、命名和空格的约定。

#### 类
坚持使用大写驼峰命名法来命名类。

为何？遵循类命名传统约定。

为何？类可以被实例化和构造实例。根据约定，用大写驼峰命名法来标识可构造的东西。

```
export class ExceptionService {
  constructor() { }
}
```

#### 常量
坚持用 const 声明变量，除非它们的值在应用的生命周期内会发生变化。

为何？告诉读者这个值是不可变的。

为何？ TypeScript 会要求在声明时立即初始化，并阻止再次赋值，以帮助确保你的设计意图。

考虑 把常量名拼写为小驼峰格式。

为何？小驼峰变量名 (heroRoutes) 比传统的大写蛇形命名法 (HERO_ROUTES) 更容易阅读和理解。

为何？ 把常量命名为大写蛇形命名法的传统源于现代 IDE 出现之前， 以便阅读时可以快速发现那些 const 定义。 TypeScript 本身就能够防止意外赋值。

坚持容许现存的const 常量沿用大写蛇形命名法。

为何？传统的大写蛇形命名法仍然很流行、很普遍，特别是在第三方模块中。 修改它们没多大价值，还会有破坏现有代码和文档的风险。

```
export const mockHeroes   = ['Sam', 'Jill']; // prefer
export const heroesUrl    = 'api/heroes';    // prefer
export const VILLAINS_URL = 'api/villains';  // tolerate
```

#### 接口
坚持使用大写驼峰命名法来命名接口。

考虑不要在接口名字前面加 I 前缀。

考虑在服务和可声明对象（组件、指令和管道）中用类代替接口。

考虑用接口作为数据模型。

为何？TypeScript 指导原则不建议使用 “I” 前缀。

为何？单独一个类的代码量小于类+接口。

为何？类可以作为接口使用（只是用 implements 代替 extends 而已）。

为何？在 Angular 依赖注入系统中，接口类（译注：指写成类的形式，但是只当做接口使用）可以作为服务提供商的查找令牌。

```
import { Injectable } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroCollectorService {
  hero: Hero;

  constructor() { }
}
```

#### 属性和方法
坚持使用小写驼峰命名法来命名属性和方法。

避免为私有属性和方法添加下划线前缀。

为何？遵循传统属性和方法的命名约定。

为何？ JavaScript 不支持真正的私有属性和方法。

为何？ TypeScript 工具让识别私有或公有属性和方法变得很简单。

```
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  message: string;

  private toastCount: number;

  hide() {
    this.toastCount--;
    this.log();
  }

  show() {
    this.toastCount++;
    this.log();
  }

  private log() {
    console.log(this.message);
  }
}
```

#### 导入语句中的空行
坚持在第三方导入和应用导入之间留一个空行。

考虑按模块名字的字母顺排列导入行。

考虑在解构表达式中按字母顺序排列导入的东西。

为何？空行可以让阅读和定位本地导入更加容易。

为何？按字母顺序排列可以让阅读和定位本地导入更加容易。

```
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { map }        from 'rxjs/operators';

import { Hero } from './hero.model';
import { ExceptionService, SpinnerService, ToastService } from '../../core';
```

### 应用程序结构与 Angular 模块
准备一个近期实施方案和一个长期的愿景。从零开始，但要考虑应用程序接下来的路往哪儿走。

所有应用程序的源代码都放到名叫 src 的目录里。 所有特性区都在自己的文件夹中，带有它们自己的 Angular 模块。

所有内容都遵循每个文件一个特性的原则。每个组件、服务和管道都在自己的文件里。 所有第三方程序包保存到其它目录里，而不是 src 目录。 你不会修改它们，所以不希望它们弄乱你的应用程序。 使用本指南介绍的文件命名约定。

#### LIFT
坚持组织应用的结构，达到这些目的：快速定位 (Locate) 代码、一眼识别 (Identify) 代码、 尽量保持扁平结构 (Flattest) 和尝试 (Try) 遵循 DRY (Do Not Repeat Yourself, 不重复自己) 原则。

坚持四项基本原则定义文件结构，上面的原则是按重要顺序排列的。

为何？LIFT 提供了一致的结构，它具有扩展性强、模块化的特性。因为容易快速锁定代码，提高了开发者的效率。 另外，检查应用结构是否合理的方法是问问自己：我能快速打开与此特性有关的所有文件并开始工作吗？

#### 定位
坚持直观、简单和快速地定位代码。

为何？ 要想高效的工作，就必须能迅速找到文件，特别是当不知道（或不记得）文件名时。 把相关的文件一起放在一个直观的位置可以节省时间。 富有描述性的目录结构会让你和后面的维护者眼前一亮。

#### 识别
坚持命名文件到这个程度：看到名字立刻知道它包含了什么，代表了什么。

坚持文件名要具有说明性，确保文件中只包含一个组件。

避免创建包含多个组件、服务或者混合体的文件。

为何？花费更少的时间来查找和琢磨代码，就会变得更有效率。 较长的文件名远胜于较短却容易混淆的缩写名。

#### 扁平
坚持尽可能保持扁平的目录结构。

考虑当同一目录下达到 7 个或更多个文件时创建子目录。

考虑配置 IDE，以隐藏无关的文件，例如生成出来的 .js 文件和 .js.map 文件等。

为何？没人想要在超过七层的目录中查找文件。扁平的结构有利于搜索。

另一方面，心理学家们相信， 当关注的事物超过 9 个时，人类就会开始感到吃力。 所以，当一个文件夹中的文件有 10 个或更多个文件时，可能就是创建子目录的时候了。

还是根据你自己的舒适度而定吧。 除非创建新文件夹能有显著的价值，否则尽量使用扁平结构。

#### T-DRY（尽量不重复自己）
坚持 DRY（Don't Repeat Yourself，不重复自己）。

避免过度 DRY，以致牺牲了阅读性。

为何？虽然 DRY 很重要，但如果要以牺牲 LIFT 的其它原则为代价，那就不值得了。 这也就是为什么它被称为 T-DRY。 例如，把组件命名为 hero-view.component.html 是多余的，因为带有 .html 扩展名的文件显然就是一个视图 (view)。 但如果它不那么显著，或不符合常规，就把它写出来。

#### 总体结构的指导原则
坚持从零开始，但要考虑应用程序接下来的路往哪儿走。

坚持有一个近期实施方案和一个长期的愿景。

坚持把所有源代码都放到名为 src 的目录里。

坚持如果组件具有多个伴隨文件 (.ts、.html、.css 和 .spec)，就为它创建一个文件夹。

为何？ 在早期阶段能够帮助保持应用的结构小巧且易于维护，这样当应用增长时就容易进化了。

为何? 组件通常有四个文件 (*.html、 *.css、 *.ts 和 *.spec.ts)，它们很容易把一个目录弄乱。

下面是符合规范的目录和文件结构

```
<project root>

src

app

core

core.module.ts

exception.service.ts|spec.ts

user-profile.service.ts|spec.ts

heroes

hero

hero.component.ts|html|css|spec.ts

hero-list

hero-list.component.ts|html|css|spec.ts

shared

hero-button.component.ts|html|css|spec.ts

hero.model.ts

hero.service.ts|spec.ts

heroes.component.ts|html|css|spec.ts

heroes.module.ts

heroes-routing.module.ts

shared

shared.module.ts

init-caps.pipe.ts|spec.ts

text-filter.component.ts|spec.ts

text-filter.service.ts|spec.ts

villains

villain

...

villain-list

...

shared

...

villains.component.ts|html|css|spec.ts

villains.module.ts

villains-routing.module.ts

app.component.ts|html|css|spec.ts

app.module.ts

app-routing.module.ts

main.ts

index.html

...

node_modules/...

...
```

#### 按特性组织的目录结构
坚持根据特性区命名目录。

为何？开发人员可以快速定位代码，扫一眼就能知道每个文件代表什么，目录尽可能保持扁平，既没有重复也没有多余的名字。

为何？ LIFT 原则中包含了所有这些。

为何？遵循 LIFT 原则精心组织内容，避免应用变得杂乱无章。

为何？当有很多文件时（例如 10 个以上），在专用目录型结构中定位它们会比在扁平结构中更容易。

坚持为每个特性区创建一个 Angular 模块。

为何？ Angular 模块使惰性加载可路由的特性变得更容易。

为何？Angular 模块隔离、测试和复用特性更容易。

#### 应用的根模块
坚持在应用的根目录创建一个 Angular 模块（例如 /src/app）。

为何？每个应用都至少需要一个根 Angular 模块。

考虑把根模块命名为 app.module.ts。

为何？能让定位和识别根模块变得更容易。

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }    from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule {}
```

#### 特性模块
坚持为应用中每个明显的特性创建一个 Angular 模块。

坚持把特性模块放在与特性区同名的目录中（例如 app/heroes）。

坚持特性模块的文件名应该能反映出特性区的名字和目录（例如 app/heroes/heroes.module.ts）。

坚持特性模块的符号名应该能反映出特性区、目录和文件名（例如在 app/heroes/heroes.module.ts 中定义 HeroesModule）。

为何？特性模块可以对其它模块暴露或隐藏自己的实现。

为何？特性模块标记出组成该特性分区的相关组件集合。

为何？方便路由到特性模块 —— 无论是用主动加载还是惰性加载的方式。

为何？特性模块在特定的功能和其它应用特性之间定义了清晰的边界。

为何？特性模块帮助澄清开发职责，以便于把这些职责指派给不同的项目组。

为何？特性模块易于隔离，以便测试。

#### 共享特性模块
坚持在 shared 目录中创建名叫 SharedModule 的特性模块（例如在 app/shared/shared.module.ts 中定义 SharedModule）。

坚持在共享模块中声明那些可能被特性模块引用的可复用组件、指令和管道。

考虑把可能在整个应用中到处引用的模块命名为 SharedModule

避免 在共享模块中提供服务。服务通常是单例的，应该在整个应用或一个特定的特性模块中只有一份。

坚持在 SharedModule 中导入所有模块都需要的资产（例如 CommonModule 和 FormsModule）。

为何？ SharedModule 中包含的组件、指令和管道可能需要来自其它公共模块的特性（例如来自 CommonModule 中的 ngFor 指令）。

坚持在 SharedModule 中声明所有组件、指令和管道。

坚持从 SharedModule 中导出其它特性模块所需的全部符号。

为何？ SharedModule 的存在，能让常用的组件、指令和管道在很多其它模块的组件模板中都自动可用。

避免在 SharedModule 中指定应用级的单例服务提供商。如果是刻意要得到多个服务单例也行，不过还是要小心。

为何？惰性加载的特性模块如果导入了这个共享模块，会创建一份自己的服务副本，这可能会导致意料之外的后果。

为何？对于单例服务，你不希望每个模块都有自己的实例。 而如果 SharedModule 提供了一个服务，那就有可能发生这种情况。

```
src

app

shared

shared.module.ts

init-caps.pipe.ts|spec.ts

text-filter.component.ts|spec.ts

text-filter.service.ts|spec.ts

app.component.ts|html|css|spec.ts

app.module.ts

app-routing.module.ts

main.ts

index.html

...
```

#### 核心特性模块
考虑把那些数量庞大、辅助性的、只用一次的类收集到核心模块中，让特性模块的结构更清晰简明。

坚持把那些“只用一次”的类收集到 CoreModule 中，并对外隐藏它们的实现细节。简化的 AppModule 会导入 CoreModule，并且把它作为整个应用的总指挥。

坚持在 core 目录下创建一个名叫 CoreModule 的特性模块（例如在 app/core/core.module.ts 中定义 CoreModule）。

坚持把要共享给整个应用的单例服务放进 CoreModule 中（例如 ExceptionService 和 LoggerService）。

坚持导入 CoreModule 中的资产所需要的全部模块（例如 CommonModule 和 FormsModule）。

为何？ CoreModule 提供了一个或多个单例服务。Angular 使用应用的根注入器注册这些服务提供商，让每个服务的这个单例对象对所有需要它们的组件都是可用的，而不用管该组件是通过主动加载还是惰性加载的方式加载的。

为何？CoreModule 将包含一些单例服务。而如果是由惰性加载模块来导入这些服务，它就会得到一个新实例，而不是所期望的全应用级单例。

坚持把应用级、只用一次的组件收集到 CoreModule 中。 只在应用启动时从 AppModule 中导入它一次，以后再也不要导入它（例如 NavComponent 和 SpinnerComponent）。

为何？真实世界中的应用会有很多只用一次的组件（例如加载动画、消息浮层、模态框等），它们只会在 AppComponent 的模板中出现。 不会在其它地方导入它们，所以没有共享的价值。 然而它们又太大了，放在根目录中就会显得乱七八糟的。

避免在 AppModule 之外的任何地方导入 CoreModule。

为何？如果惰性加载的特性模块直接导入 CoreModule，就会创建它自己的服务副本，并导致意料之外的后果。

为何？主动加载的特性模块已经准备好了访问 AppModule 的注入器，因此也能取得 CoreModule 中的服务。

坚持从 CoreModule 中导出 AppModule 需导入的所有符号，使它们在所有特性模块中可用。

为何？CoreModule 的存在就让常用的单例服务在所有其它模块中可用。

为何？你希望整个应用都使用这个单例服务。 你不希望每个模块都有这个单例服务的单独的实例。 然而，如果 CoreModule 中提供了一个服务，就可能偶尔导致这种后果。

```
src

app

core

core.module.ts

logger.service.ts|spec.ts

nav

nav.component.ts|html|css|spec.ts

spinner

spinner.component.ts|html|css|spec.ts

spinner.service.ts|spec.ts

app.component.ts|html|css|spec.ts

app.module.ts

app-routing.module.ts

main.ts

index.html

...
```

#### 防止多次导入 CoreModule
应该只有 AppModule 才允许导入 CoreModule。

坚持防范多次导入 CoreModule，并通过添加守卫逻辑来尽快失败。

为何？守卫可以阻止对 CoreModule 的多次导入。

为何？守卫会禁止创建单例服务的多个实例。

```
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
```

#### 惰性加载的目录
某些边界清晰的应用特性或工作流可以做成惰性加载或按需加载的，而不用总是随着应用启动。

坚持把惰性加载特性下的内容放进惰性加载目录中。 典型的惰性加载目录包含路由组件及其子组件以及与它们有关的那些资产和模块。

为何？这种目录让标识和隔离这些特性内容变得更轻松。

#### 永远不要直接导入惰性加载的目录
避免让兄弟模块和父模块直接导入惰性加载特性中的模块。

为何？直接导入并使用此模块会立即加载它，而原本的设计意图是按需加载它。

### 组件

#### 组件选择器命名
坚持使用中线 (dashed) 命名法或烤串 (kebab) 命名法来命名组件中的元素选择器。

为何？保持元素命名与自定义元素命名规范一致。

```
@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}
```

#### 把组件当做元素
考虑给组件一个元素选择器，而不是属性或类选择器。

为何？组件有很多包含 HTML 以及可选 Angular 模板语法的模板。 它们显示内容。开发人员会把组件像原生 HTML 元素和 WebComponents 一样放进页面中。

为何？查看组件模板的 HTML 时，更容易识别一个符号是组件还是指令。

```
@Component({
  selector: 'toh-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent {}
```

#### 把模板和样式提取到它们自己的文件
坚持当超过 3 行时，把模板和样式提取到一个单独的文件。

坚持把模板文件命名为 [component-name].component.html，其中，[component-name] 是组件名。

坚持把样式文件命名为 [component-name].component.css，其中，[component-name] 是组件名。

坚持指定相对于模块的 URL ，给它加上 ./ 前缀。

为何？巨大的、内联的模板和样式表会遮盖组件的意图和实现方式，削弱可读性和可维护性。

为何？在多数编辑器中，编写内联的模板和样式表时都无法使用语法提示和代码片段功能。 Angular 的 TypeScript 语言服务（即将到来）可以帮助那些编辑器在编写 HTML 模板时克服这一缺陷，但对 CSS 样式没有帮助。

为何？当你移动组件文件时，相对于组件的 URL 不需要修改，因为这些文件始终会在一起。

为何？./ 前缀是相对 URL 的标准语法，不必依赖 Angular 的特殊处理，如果没有前缀则不行。

```
@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

 constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
```

#### 内联输入和输出属性装饰器
坚持 使用 @Input() 和 @Output()，而非 @Directive 和 @Component 装饰器的 inputs 和 outputs 属性:

坚持把 @Input() 或者 @Output() 放到所装饰的属性的同一行。

为何？易于在类里面识别哪些属性是输入属性或输出属性。

为何？ 如果需要重命名与 @Input 或者 @Output 关联的属性或事件名，你可以在一个位置修改。

为何？依附到指令的元数据声明会比较简短，更易于阅读。

为何？把装饰器放到同一行可以精简代码，同时更易于识别输入或输出属性。

```
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  @Output() change = new EventEmitter<any>();
  @Input() label: string;
}
```

#### 避免为输入和输出属性指定别名
避免除非有重要目的，否则不要为输入和输出指定别名。

为何？同一个属性有两个名字（一个对内一个对外）很容易导致混淆。

为何？如果指令名也同时用作输入属性，而且指令名无法准确描述这个属性的用途时，应该使用别名。

```
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  // No aliases
  @Output() change = new EventEmitter<any>();
  @Input() label: string;
}
```

#### 成员顺序
坚持把属性成员放在前面，方法成员放在后面。

坚持先放公共成员，再放私有成员，并按照字母顺序排列。

为何？把类的成员按照统一的顺序排列，易于阅读，能立即识别出组件的哪个成员服务于何种目的。

```
export class ToastComponent implements OnInit {
  // public properties
  message: string;
  title: string;

  // private fields
  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  private toastElement: any;

  // public methods
  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;
    window.setTimeout(() => this.hide(), 2500);
  }
}
```

#### 把逻辑放到服务里
坚持在组件中只包含与视图相关的逻辑。所有其它逻辑都应该放到服务中。

坚持把可重用的逻辑放到服务中，保持组件简单，聚焦于它们预期目的。

为何？当逻辑被放置到服务里，并以函数的形式暴露时，可以被多个组件重复使用。

为何？在单元测试时，服务里的逻辑更容易被隔离。当组件中调用逻辑时，也很容易被模拟。

为何？从组件移除依赖并隐藏实施细节。

为何？保持组件苗条、精简和聚焦。

```
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'toh-hero-list',
  template: `...`
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}
  getHeroes() {
    this.heroes = [];
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
}
```

#### 不要给输出属性加前缀
坚持命名事件时，不要带前缀 on。

坚持把事件处理器方法命名为 on 前缀之后紧跟着事件名。

为何？与内置事件命名一致，例如按钮点击。

为何？Angular 允许另一种备选语法 on-*。如果事件的名字本身带有前缀 on，那么绑定的表达式可能是 on-onEvent。

```
export class HeroComponent {
  @Output() savedTheDay = new EventEmitter<boolean>();
}

<toh-hero (savedTheDay)="onSavedTheDay($event)"></toh-hero>
```

#### 把表现层逻辑放到组件类里
坚持把表现层逻辑放进组件类中，而不要放在模板里。

为何？逻辑应该只出现在一个地方（组件类里）而不应分散在两个地方。

为何？将组件的表现层逻辑放到组件类而非模板里，可以增强测试性、维护性和重复使用性。

```
@Component({
  selector: 'toh-hero-list',
  template: `
    <section>
      Our list of heroes:
      <toh-hero *ngFor="let hero of heroes" [hero]="hero">
      </toh-hero>
      Total powers: {{totalPowers}}<br>
      Average power: {{avgPower}}
    </section>
  `
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers: number;

  get avgPower() {
    return this.totalPowers / this.heroes.length;
  }
}
```

### 指令

#### 使用指令来增强已有元素
坚持当你需要有表现层逻辑，但没有模板时，使用属性型指令。

为何？属性型指令没有模板。

为何？一个元素可以使用多个属性型指令。

```
@Directive({
  selector: '[tohHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseover') onMouseEnter() {
    // do highlight work
  }
}
```

```
<div tohHighlight>Bombasta</div>
```

#### HostListener 和 HostBinding 装饰器 vs. 组件元数据 host
考虑优先使用 @HostListener 和 @HostBinding，而不是 @Directive 和 @Component 装饰器的 host 属性。

坚持让你的选择保持一致。

为何？对于关联到 @HostBinding 的属性或关联到 @HostListener 的方法，要修改时，只需在指令类中的一个地方修改。 如果使用元数据属性 host，你就得在组件类中修改属性声明的同时修改相关的元数据。

```
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[tohValidator]'
})
export class ValidatorDirective {
  @HostBinding('attr.role') role = 'button';
  @HostListener('mouseenter') onMouseEnter() {
    // do work
  }
}
```

与不推荐的方式（host 元数据）比较一下。

为何？host 元数据只是一个便于记忆的名字而已，并不需要额外的 ES 导入。

```
import { Directive } from '@angular/core';

@Directive({
  selector: '[tohValidator2]',
  host: {
    '[attr.role]': 'role',
    '(mouseenter)': 'onMouseEnter()'
  }
})
export class Validator2Directive {
  role = 'button';
  onMouseEnter() {
    // do work
  }
}
```

### 服务

#### 服务总是单例的
坚持在同一个注入器内，把服务当做单例使用。用它们来共享数据和功能。

为何？服务是在特性范围或应用内共享方法的理想载体。

为何？服务是共享状态性内存数据的理想载体。

```
export class HeroService {
  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get('api/heroes').pipe(
      map((response: Response) => <Hero[]>response.json()));
  }
}
```

#### 单一职责
坚持创建单一职责的服务，用职责封装在它的上下文中。

坚持当服务成长到超出单一用途时，创建一个新服务。

为何？当服务有多个职责时，它很难被测试。

为何？当某个服务有多个职责时，每个注入它的组件或服务都会承担这些职责的全部开销。

#### 提供一个服务
坚持将服务提供到共享范围内的顶级组件的 Angular 注入器。

为何？ Angular 注入器是层次化的。

为何？在顶层组件提供服务时，该服务实例在所有子组件中可见并共享。

为何？服务是共享方法或状态的理想载体。

为何？当不同的两个组件需要一个服务的不同的实例时，上面的方法这就不理想了。在这种情况下，对于需要崭新和单独服务实例的组件，最好在组件级提供服务。

```
import { Component } from '@angular/core';

import { HeroService } from './heroes';

@Component({
  selector: 'toh-app',
  template: `
      <toh-heroes></toh-heroes>
    `,
  providers: [HeroService]
})
export class AppComponent {}
```

```
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'toh-heroes',
  template: `
      <pre>{{heroes | json}}</pre>
    `
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
```

#### 使用 @Injectable() 类装饰器
坚持当使用类型作为令牌来注入服务的依赖时，使用 @Injectable() 类装饰器，而非 @Inject() 参数装饰器。

为何？ Angular 的 DI 机制会根据服务的构造函数参数的声明类型来解析服务的所有依赖。

为何？当服务只接受类型令牌相关的依赖时，比起在每个构造函数参数上使用 @Inject()，@Injectable() 的语法简洁多了。

```
@Injectable()
export class HeroArena {
  constructor(
    private heroService: HeroService,
    private http: Http) {}
}
```

### 数据服务
#### 通过服务与 Web 服务器通讯
坚持把数据操作和与数据交互的逻辑重构到服务里。

坚持让数据服务来负责 XHR 调用、本地储存、内存储存或者其它数据操作。

为何？组件的职责是为视图展示或收集信息。它不应该关心如何获取数据，它只需要知道向谁请求数据。把如何获取数据的逻辑移动到数据服务里，简化了组件，让其聚焦于视图。

为何？在测试使用数据服务的组件时，可以让数据调用更容易被测试（模拟或者真实）。

为何？数据管理的详情，比如头信息、方法、缓存、错误处理和重试逻辑，不是组件和其它的数据消费者应该关心的事情。

数据服务应该封装这些细节。这样，在服务内部修改细节，就不会影响到它的消费者。并且更容易通过实现一个模拟服务来对消费者进行测试。

### 生命周期钩子
使用生命周期钩子来介入到 Angular 暴露的重要事件里。

#### 实现生命周期钩子接口
坚持实现生命周期钩子接口。

为何？如果使用强类型的方法签名，编译器和编辑器可以帮你揪出拼写错误。

```
@Component({
  selector: 'toh-hero-button',
  template: `<button>OK</button>`
})
export class HeroButtonComponent implements OnInit {
  ngOnInit() {
    console.log('The component is initialized');
  }
}
```

### Codelyzer
坚持使用 [codelyzer](https://www.npmjs.com/package/codelyzer_blank) 来实施本指南。

考虑调整 [codelyzer](https://www.npmjs.com/package/codelyzer_blank) 的规则来满足你的需求。

### 文档模板和代码片段
坚持使用文件模板或代码片段来帮助实现一致的风格和模式。下面是为一些网络开发编辑器和 IDE 准备的模板和/或代码片段：

考虑使用 [Visual Studio Code](https://code.visualstudio.com?_blank)的[代码片段](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2_blank) 来实施本风格指南。