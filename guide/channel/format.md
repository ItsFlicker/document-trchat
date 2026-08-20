# 消息格式

## 结构

- 条件
- 优先级
- *消息设置
  - 默认颜色
  - 样式...
- *前缀
  - **ID**
    - *文字
    - 样式...
  - ...
- 后缀
  - **ID**
    - *文字
    - 样式...

## 消息设置 (msg)

`msg` 用于设置玩家消息的显示效果, 常用配置项如下

### default-color

消息的默认颜色 (该颜色也用于特殊字符包裹后的恢复)

```yaml
msg:
  default-color: '&7'
```

### special-char

> 版本要求: 2.4.14+

为列表中的特定字符 (如 Emoji) 强制设置颜色, 需要配合 `special-chars.yml` 中的 `SpecialChars` 列表使用

```yaml
msg:
  default-color: '&7'
  special-char:
    Enabled: false
    special-char-color: '&f'
```

* `Enabled`: 是否启用特殊字符着色
* `special-char-color`: 特殊字符显示的颜色
* 典型用途: 服务器使用包含彩色 Emoji 的资源包时, 将 `special-char-color` 设为 `&f` 可避免聊天中 Emoji 变色
* 具体字符列表在 `special-chars.yml` 中配置, 详见[配置](../configuration#special-charsyml)

### 其他

`msg` 同样支持[悬浮事件](json#悬浮事件)与[文字阴影](json#文字阴影)等 JSON 组件特性

```yaml
msg:
  default-color: '&7'
  hover: '&7Date: %server_time_HH:mm:ss%'
  shadow: '#000000:0.25'
```

## 分组

### 组并列

Formats(Sender/Receiver)下的并列

适用于大范围显示控制

---

### 块并列

每个JSON块又可以分成多块，便于通过条件控制中范围显示

条件检测时从上到下，所以应把无条件的放到最后

示例: 检测玩家是否有op，改变显示的文字和悬浮字

```yaml
player:
    - condition: 'player op'
      text: '&4%player_name%'
      hover: |-
        &r
        &8▪ &7Ping: &3%player_ping% Ms
        &8▪ &7Health: &c%player_health_rounded% ❤
        &r
        &6▶ &eClick to contact with op
        &r
    - text: '&7%player_name%'
      hover: |-
        &r
        &8▪ &7Ping: &3%player_ping% Ms
        &8▪ &7Health: &c%player_health_rounded% ❤
        &r
        &6▶ &eClick to chat with me
        &r
```

---

### 条并列

每个JSON构成部分又可以分成多条，便于通过条件控制小范围显示

条件检测时从上到下，所以应把无条件的放到最后

示例: 通过权限控制玩家名称颜色

```yaml
player:
  text:
    - '&6%player_name%{condition: perm "group.mvp"}'
    - '&3%player_name%{condition: perm "group.vip"}'
    - '&a%player_name%'
```