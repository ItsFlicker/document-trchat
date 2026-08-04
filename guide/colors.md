# 颜色

## 普通颜色/修饰

### 用法

* & + 格式化代码
* § + 格式化代码

::: tip 更多内容
https://minecraft.fandom.com/zh/wiki/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81
:::

### 示例

* `&b` 天蓝色
* `§2` 深绿色

### 权限

`trchat.color.格式化代码`

::: tip
自2.3.6起颜色权限可按场景细化:

* `trchat.color.chat.*` 聊天
* `trchat.color.anvil.*` 铁砧
* `trchat.color.sign.*` 告示牌
* `trchat.color.book.*` 书本

原 `trchat.color.*` 权限仍然生效, 另可通过 `trchat.color.force-defaultcolor.<颜色>` 强制指定某玩家的默认聊天颜色
:::

## HEX颜色

::: info
以下颜色要求版本1.16+
:::

### 用法

* `&#FFFFFF`
* `&{#FFFFFF}`

### 权限

`trchat.color.hex`

## 渐变颜色

### 用法

正则表达式：
```
<(?<type>gradient|g)(#(?<speed>\d+))?(?<hex>(:#([A-Fa-f\d]{6}|[A-Fa-f\d]{3})){2,})(:(?<loop>l|L|loop))?>
```

### 示例

`<g:#FFFFFF:#FFFFFF>`

### 权限

`trchat.color.gradients`

## 彩虹颜色

### 用法

正则表达式：
```
<(?<type>rainbow|r)(#(?<speed>\d+))?(:(?<saturation>\d*\.?\d+))?(:(?<brightness>\d*\.?\d+))?(:(?<loop>l|L|loop))?>
```

### 示例

`<r:0.4>`

### 权限

`trchat.color.rainbow`

## 文字阴影

> 2.3.10+ 支持为文字设置阴影 (JSON组件样式, 非内联颜色码)

### 用法

在JSON组件的样式中使用`shadow`键:

* `shadow: false` 关闭阴影
* `shadow: '#RRGGBB'` 设置阴影颜色
* `shadow: '#RRGGBB:0.5'` 设置阴影颜色和透明度 (alpha 0~1浮点数)
* 也支持命名颜色 (如`white`)

### 示例

```yaml
world:
  text: '&8[&3%player_world%&8]'
  shadow: '#000000:0.25'
```

::: warning
阴影为组件样式, 只能在JSON组件 (text/prefix/suffix等) 中使用, 不能作为内联颜色码
:::