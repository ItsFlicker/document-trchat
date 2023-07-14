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

## HEX颜色

::: info
以下颜色要求版本1.16+
:::

### 用法

* `&{#FFFFFF}`
* `&#FFFFFF`

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