# 条件与动作

在`condition`和`action`中使用，默认为Kether动作

## Kether动作

### Cancel

> 取消玩家的一次聊天

`cancel`

### Channel (shared)

> 让玩家加入或退出频道

`channel (join|quit) {channel} [hint {boolean}]`

### Filter (shared)

> 检测或过滤文本中的敏感词

`filter (check|get) {text}`

## JavaScript动作

- 前缀: `$ `或`js:`
- 提供的属性:
  - `bukkitServer` -> 即`Bukkit.getServer()`
  - `utils` -> [Assist](https://github.com/TrPlugins/TrChat/blob/v2/project/runtime-bukkit/src/main/kotlin/me/arasple/mc/trchat/module/internal/script/js/Assist.kt)实例
  - `session` -> 玩家[聊天会话](https://github.com/TrPlugins/TrChat/blob/v2/project/runtime-bukkit/src/main/kotlin/me/arasple/mc/trchat/module/display/ChatSession.kt)
  - `data` -> 玩家[持久化数据](https://github.com/TrPlugins/TrChat/blob/v2/project/runtime-bukkit/src/main/kotlin/me/arasple/mc/trchat/module/internal/data/PlayerData.kt)
  - `player`, `sender` -> 玩家