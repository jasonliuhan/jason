```
// 热加载
npm run dev.xx

http://localhost:9001/

// 编译
npm run build.xx

// 移动端

npm run dev.xx.m

http://localhost:9002/
```

#### 构建移动端页面

###### src/images/page_mobile_2
###### src/js/page_mobile_2
###### src/sass_mobile_2
###### src/template/mobile_2

```
npm run m2.dev

npm run m2.build
```

#### 构建直播页面/直播移动端页面

```
npm run live.dev

npm run live.m.dev

npm run live.build

npm run live.m.build
```

#### 构建图书商城

```
npm run bookshop.dev

npm run bookshop.build

```

# css 布局

#### 容器

`.container`

```
<div class="container"></div>
```

#### 容器分栏

`.container-left`

`.container-right`

```
<div class="container-left"></div>
<div class="container-right"></div>
```

#### 块

`.block`

容器内必须使用.block包裹内容

```
<div class="container-left">
    <div class="block">
        ....
    </div>
</div>
```

##### 块头／块域

`.block-title`

`.block-body`

```
<div class="container-left">
    <div class="block">
       <div class="block-title">
           ....
       </div>
       <div class="block-body">
           ....
       </div>
    </div>
</div>
```
