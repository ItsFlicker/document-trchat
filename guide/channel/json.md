# JSON 组件

## 组成块

消息(**msg**)、前缀(**prefix**)、后缀(**suffix**)、自定义功能显示(**display**)都是由**JSON组件**组成的

以下为每个**JSON组件**的构成

::: tip
文本均支持[Kether内联语句](https://www.yuque.com/sacredcraft/kether/action-inline)
:::

### text

显示的文字 (不适用于**msg**)

示例: 
```yaml 
world:
  text: '&8[&3%player_world%&8]'
```

### head

显示一个玩家头颅 (2.3.17+), 先于text加载

支持三种内容:

* `<玩家名>` 按名称获取头颅
* `<UUID>` 按UUID获取头颅
* `纹理URL` (包含`/`) 按皮肤纹理获取头颅

可在内容后加`:true/false`控制是否作为帽子 (默认`true`)

示例:
```yaml
player:
  head: '%player_name%:true'
  text: '&7%player_name%'
```

### insertion

点击后在聊天栏插入文字

示例:
```yaml 
tail:
  text: '&7~~~[点我点我~]'
  insertion: 'qwq'
```

### font

文字的字体

示例:
```yaml 
tag:
  text: '...' # 一些在材质包里的特殊字符
  font: '...' # 材质包的命名空间
```

## 悬浮事件

鼠标放到文字上触发的事件

只能同时存在一种

### hover

放上后出现悬浮字

示例:
```yaml 
world:
  text: '&8[&3%player_world%&8]'
  hover: |-
    &r
    &8▪ &7Location: &3%player_world%&7, &2%player_x%/%player_y%/%player_z%
    &r
    &6▶ &eClick here to send a teleport request
    &r
```

::: warning
`hoveritem`/`hoverentity` 目前暂不支持
:::

## 点击事件

鼠标点击文字触发的事件

只能同时存在一种

### suggest

点击后聊天栏内容被替换为设定的内容

示例:
```yaml 
player:
  text: '&7%player_name%'
  suggest: '/msg %player_name% '
```

### command

点击后执行命令

示例:
```yaml 
world:
  text: '&8[&3%player_world%&8]'
  command: '/tpa %player_name%'
```

### url

点击后打开网页

示例:
```yaml 
tag:
  text: '&8[&2主播&8]'
  url: 'https://...'
```

### copy

点击后复制内容到剪贴板 (_低版本不支持_)

示例:
```yaml 
tag:
  text: '&8[&2主播&8]'
  copy: 'https://...'
```

### file

点击后打开本地文件

示例:
```yaml 
tag:
  text: '&8[&2公告&8]'
  file: 'plugins/TrChat/notice.txt'
```

## 文字阴影

> 2.3.10+ 支持为文字设置阴影

### shadow

* `shadow: false` 关闭阴影
* `shadow: '#RRGGBB'` 设置阴影颜色
* `shadow: '#RRGGBB:0.5'` 设置阴影颜色和透明度 (alpha 0~1浮点数)
* 也支持命名颜色 (如`white`)

示例:
```yaml 
world:
  text: '&8[&3%player_world%&8]'
  shadow: '#000000:0.25'
```