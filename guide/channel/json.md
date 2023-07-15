# JSON 组件

## 组成块

消息(**msg**)、前缀(**prefix**)、后缀(**suffix**)、自定义功能显示(**display**)都是由**JSON组件**组成的

以下为每个**JSON组件**的构成

### text

显示的文字 (不适用于**msg**)

示例: 
```yaml 
world:
  text: '&8[&3%player_world%&8]'
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

### hoveritem (WIP)

放上后出现物品

### hoverentity (WIP)

放上后出现实体

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