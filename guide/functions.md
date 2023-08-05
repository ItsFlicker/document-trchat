# 功能

function.yml

::: tip
部分消息/声音等在lang文件中配置
:::

## 命令控制器

```yaml
Command-Controller:
  Enabled: true # 是否启用
  List:
    - 'ver(sion)?(s)?{condition: perm "trchat.admin"}' # 无trchat.admin权限禁止执行/ver(s)或/version(s)命令
    - 'arasple{exact: true}{condition: perm "trchat.admin"}' # 仅禁止执行/arasple命令
    - 'punish{relocate: mute {0};kick {0}}' # /punish <player>命令跳转至/mute <player>和/kick <player>命令
    - 'shout{cooldown: 3}' # shout命令三秒冷却
```

::: info
TrChat 仅提供一些简单命令控制功能，若有更多需求请使用其他插件
:::

## @功能

```yaml
Mention:
  Enabled: true
  Self-Mention: false # 是否能@自己
  Permission: 'none' # 不需要权限
  Cooldown: '30s' # 冷却时间30秒
  Notify: true # 是否发送ActionBar和声音提醒
  Action: [ ] # 执行的Kether动作
```

## @所有玩家功能

```yaml
Mention-All:
  Enabled: true
  Permission: 'trchat.function.mentionall' # 需要权限trchat.function.mentionall
  Cooldown: '5m'
  Notify: true
  Keys: # 触发关键词
    - "@all"
    - "@everyone"
    - "@everybody"
    - "@所有人"
    - "@全体成员"
  Action: [ ]
```

## 展示物品

```yaml
Item-Show:
  Enabled: true
  Permission: 'none'
  Cooldown: '30s'
  Origin-Name: false # 是否使用物品原始名称
  Compatible: false # 是否启用兼容模式 (出现问题时使用)
  Keys:
    - "%i%"
    - "%i"
    - "%item%"
    - "%item"
    - "[i]"
    - "[item]"
    Action: [ ]
```

### 示例

```yaml
    Action: |-
      if player op then {
        tell "你展示了你的物品!"
      } else {
        tell "你不能展示物品!"
        cancel
      }
```

## 展示背包

```yaml
Inventory-Show:
  Enabled: true
  Permission: 'trchat.function.inventoryshow'
  Cooldown: '30s'
  Keys:
    - '[inv]'
    - '[inventory]'
  Action: [ ]
```

## 展示末影箱

```yaml
EnderChest-Show:
  Enabled: true
  Permission: 'trchat.function.enderchestshow'
  Cooldown: '30s'
  Keys:
    - '[ender]'
    - '[enderchest]'
  Action: [ ]
```

## 展示图片

```yaml
Image-Show:
  Enabled: true
  Permission: 'trchat.function.imageshow'
  Cooldown: '1m'
  Key: '!\[([^;]*)\]\(([a-zA-Z]+://[^\s]*)\)' # 正则表达式
  Action: [ ]
```

### 示例

`![Tr Logo](https://avatars.githubusercontent.com/u/107529511?s=200&v=4)`

## 自定义功能

### 示例 —— QQ 分享

```yaml
shareQQ:
  condition: ~ # 使用条件 (Kether或JavaScript)
  priority: 100 # 优先级
    # 匹配正则表达式
    # 示例模块的表达式部分来自互联网
    pattern: 'QQ( )?[1-9]([0-9]{5,11})'
    # 变量 {0} 是按下方表达式提取后的内容, 可以不配置此项
    text-filter: '[1-9]([0-9]{5,11})'
    # 自定义显示 JSON 组件
    display:
      text: '&8[&3&lQQ&8]'
      hover:
        - ''
        - '&3QQ: &b{0}'
        - ''
        - '&7这是一个 QQ 账号,'
        - '&7你可以点击此项快速打开聊天'
        - ''
        - '&8[&c!&8] &7请勿进行任何金钱交易'
        - '&8[&c!&8] &7交友需谨慎'
      url: 'https://wpa.qq.com/msgrd?v=3&uin={0}&site=qq&menu=yes'
```