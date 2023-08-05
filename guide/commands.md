# 命令

## 主命令

> 插件主命令

名称: `/trchat` `/trc`

访问权限: `trchat.access`

子命令权限: `trchat.command.子命令名称`

* **/trchat color**

> 选择发送消息颜色

* **/trchat chatFilter**

> 打开过滤器界面

* **/trchat clear `player`**

> 使玩家清屏

* **/trchat tellsimple `player` `message`**

> 向玩家发送一条[行内复合文本](https://plugins.ptms.ink/function/components/)

* **/trchat spy**

> 切换监听玩家私聊模式

* **/trchat vanish**

> 开启后此玩家无法用命令补全, 也无法被@

* **/trchat removemessage `message`**

> 撤回玩家消息

::: warning
Arclight端暂时无法使用
:::

* **/trchat reload**

> 手动重载所有插件配置

## 回复

> 回复刚刚向你发送私聊的玩家

* 名称: `/reply` `/r`
* 权限: `trchat.private`

## 禁言

> 禁止玩家发言

* 名称: `/mute`
* 权限: `trchat.command.mute`
* 参数:
  * `-time <time>`: 禁言时间
  * `-reason <reason>`: 禁言原因
  * `--cancel`: 取消禁言 (等同于`/unmute`)

## 全员禁言

> 禁止全部玩家发言 (除有`trchat.bypass.globalmute`权限的玩家)

* 名称: `/muteall` `/globalmute`
* 权限: `trchat.command.muteall`

## 频道

> 切换聊天频道

* 名称: `/channel` `/chatchannel` `/trchannel`
* 权限: `trchat.command.channel`

## 屏蔽

> 屏蔽特定玩家聊天

* 名称: `/ignore`
* 权限: `trchat.command.ignore`

> 已屏蔽玩家列表

* 名称: `/ignorelist`
* 权限: `trchat.command.ignore`