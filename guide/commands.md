# 命令

## 主命令

> 插件主命令

名称: `/trchat` `/trc`

访问权限: `trchat.access`

子命令权限: `trchat.command.子命令名称`

* **/trchat color**

> 选择发送消息颜色

* **/trchat recallmessage `message`**

> 撤回玩家消息

* **/trchat chatFilter `on|off`**

> 开启或关闭聊天过滤器

* **/trchat clear `player`**

> 使玩家清屏 (`player`为`*`时清屏所有在线玩家)

* **/trchat tellsimple `player` `message`**

> 向玩家发送一条[行内复合文本](https://plugins.ptms.ink/function/components/) (`player`为`*`时跨服广播)

* **/trchat tellmini `player` `message`**

> 向玩家发送一条 MiniMessage 消息 (`player`为`*`时跨服广播)

* **/trchat spy**

> 切换监听玩家私聊模式

* **/trchat reload**

> 手动重载所有插件配置

* **/trchat help**

> 查看命令帮助

## 回复

> 回复刚刚向你发送私聊的玩家

* 名称: `/reply` `/trreply` `/r`
* 权限: `trchat.private`

## 禁言

> 禁止玩家发言

* 名称: `/mute` `/trmute`
* 权限: `trchat.command.mute`
* 语法: `/mute <玩家> [时间] [原因]` (时间默认`999d`, 原因默认`null`)

::: tip
支持禁言不在线/跨服的玩家
:::

## 隐形禁言

> 玩家可以发送消息, 但只有自己能看见

* 名称: `/shadowmute` `/muteshadow`
* 权限: `trchat.command.shadowmute`
* 语法: `/shadowmute <玩家> [时间]` (时间默认`999d`)

## 解除禁言

> 取消玩家的禁言/隐形禁言

* 名称: `/unmute` `/trunmute`
* 权限: `trchat.command.unmute`

## 全员禁言

> 禁止全部玩家发言 (除有`trchat.bypass.globalmute`权限的玩家)

* 名称: `/muteall` `/globalmute`
* 权限: `trchat.command.muteall`

::: tip
`/muteall` 为开关命令, 再次执行即可解除全员禁言
:::

## 频道

> 切换聊天频道

* 名称: `/channel` `/chatchannel` `/trchannel`
* 权限: `trchat.command.channel`
* 语法:
  * `/channel join <频道>`: 加入频道
  * `/channel join <频道> <玩家>`: 将指定玩家加入频道 (需要`trchat.command.channel.other`权限, 控制台始终可用)
  * `/channel quit` `/channel leave`: 退出频道
  * `/channel quit <玩家>`: 将指定玩家移出频道 (需要`trchat.command.channel.other`权限, 控制台始终可用)

::: tip
频道的`Bindings.Command`配置会自动注册对应命令 (如`/global`、`/msg`、`/staff`), `Bindings.Prefix`用于在聊天中前缀触发
:::

## 屏蔽

> 屏蔽特定玩家聊天

* 名称: `/ignore` `/trignore`
* 权限: `trchat.command.ignore`
* 语法: `/ignore <玩家> [true/false]` (不填则切换屏蔽状态)

> 已屏蔽玩家列表

* 名称: `/ignorelist`
* 权限: `trchat.command.ignore`

## 展示

> 在GUI中查看展示的物品/背包/末影箱

* 名称: `/view-item` `/view-inventory` `/view-enderchest`
* 权限: 默认所有玩家可用

## 禁用命令

> 通过 `settings.yml` -> `Options.Disabled-Commands` 关闭命令注册

* 可用名称: `mute` `muteall` `reply` `ignore` `ignorelist` `channel` `view`
