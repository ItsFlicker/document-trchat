# 创建

## 基础

TrChat 的频道是以 **YAML** (.yml) 文件格式配置、读取加载的

因此，创建一个新的频道，你可以通过新建一个 YAML 文件开始

插件默认提供了**Normal**/**Global**/**Private**/**Staff**四个频道

## 路径

频道文件可以放在默认频道目录 (channels) 中

频道文件名（不包括拓展名后缀）即是频道的唯一 ID，

重复 ID 的频道无法正常工作

### 跨服

::: info
TrChat版本要求: 2.0.0-PRE-14+
:::

在**BungeeCord**/**Velocity**端也可以按上面的方法创建频道

每个子服都可以使用这个频道

::: tip
在线修改时，子服中至少有一个玩家时会自动更新
:::

::: warning
重启服务器可能会导致频道未同步，需要使用/trchat reload
:::

## 配置

频道的配置项将在接下来的章节详细解析

请先浏览插件自带频道所提供的示例模式，快速了解频道基本结构

## 结构

- 选项
- 绑定
  - 前缀
  - 命令
- 事件
  - 处理
  - 发送
  - 加入
  - 退出
- 格式
  - 玩家
  - 发送者 (*私聊频道特有*)
  - 接收者 (*私聊频道特有*)
  - 控制台