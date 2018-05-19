### 所有组件必须有唯一根结点，建议用 main 标签作为根结点；

```
// Not recommended
<div class="menu" #left>
  <ul nz-menu [nzMode]="'inline'" style="width: 100%">
      <ng-container *ngFor="let menu of _menus;let i = index">
          <li nz-submenu [(nzOpen)]="menu.isOpen">
              <span title>{{menu.title}}</span>
              <ul>
                  <ng-container *ngFor="let submenu of menu.submenus;let j = index">
                      <li nz-menu-item [nzSelected]="_selectIndex == i.toString()+j.toString()" (click)="nzClick(submenu,i.toString()+j.toString())">{{submenu.title}}</li>
                  </ng-container>
              </ul>
          </li>
      </ng-container>
  </ul>
</div>
<div class="content">
  <app-markdown [path]="_path"></app-markdown>
</div>

// Recommended
<main>
  <div class="menu" #left>
      <ul nz-menu [nzMode]="'inline'" style="width: 100%">
          <ng-container *ngFor="let menu of _menus;let i = index">
              <li nz-submenu [(nzOpen)]="menu.isOpen">
                  <span title>{{menu.title}}</span>
                  <ul>
                      <ng-container *ngFor="let submenu of menu.submenus;let j = index">
                          <li nz-menu-item [nzSelected]="_selectIndex == i.toString()+j.toString()" (click)="nzClick(submenu,i.toString()+j.toString())">{{submenu.title}}</li>
                      </ng-container>
                  </ul>
              </li>
          </ng-container>
      </ul>
  </div>
  <div class="content">
      <app-markdown [path]="_path"></app-markdown>
  </div>
</main>
```

### ng-container
可以有效减少dom嵌套层级，比如使用 ngIf 或者 ngFor 的时候,ng-container所在的节点是不会真实生成dom元素的:

```
<main>
  <div class="menu" #left>
      <ul nz-menu [nzMode]="'inline'" style="width: 100%">
          <ng-container *ngFor="let menu of _menus;let i = index">
              <li nz-submenu [(nzOpen)]="menu.isOpen">
                  <span title>{{menu.title}}</span>
                  <ul>
                      <ng-container *ngFor="let submenu of menu.submenus;let j = index">
                          <li nz-menu-item [nzSelected]="_selectIndex == i.toString()+j.toString()" (click)="nzClick(submenu,i.toString()+j.toString())">{{submenu.title}}</li>
                      </ng-container>
                  </ul>
              </li>
          </ng-container>
      </ul>
  </div>
  <div class="content">
      <app-markdown [path]="_path"></app-markdown>
  </div>
</main>
```

### ngIf or ngStyle
在需要频繁显示和隐藏DOM的地方用ngStyle，在特殊场景中用ngIf显示和隐藏DOM
1. ngIf通过添加或移除DOM来显示和隐藏DOM；
2. ngStyle 通过display属性来显示和隐藏DOM。

