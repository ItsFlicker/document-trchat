# 已知问题

请仔细浏览此页面，确定没有你的问题或解决方法失效后，再开启issue或在群内提问

## kotlin无法加载

```
[TrChat] Error initializing plugin 'TrChat-2.0.0.jar' in folder 'plugins' (Is it up to date?) 
java.lang.RuntimeException: Runtime environment setup failed, please feedback! (test: kotlin190.Lazy, classloader: PluginClassLoader{plugin=TrChat v2.0.0, pluginEnabled=false, url=plugins\TrChat-2.0.0.jar})         
        at me.arasple.mc.trchat.taboolib.common.TabooLibCommon.lifeCycle(TabooLibCommon.java:201) ~[TrChat-2.0.0.jar:?]         
        at me.arasple.mc.trchat.taboolib.common.TabooLibCommon.lifeCycle(TabooLibCommon.java:122) ~[TrChat-2.0.0.jar:?]         
        at me.arasple.mc.trchat.taboolib.platform.BukkitPlugin.onLoad(BukkitPlugin.java:87) ~[TrChat-2.0.0.jar:?]         
        at io.papermc.paper.plugin.storage.ServerPluginProviderStorage.processProvided(ServerPluginProviderStorage.java:59) ~[paper-1.20.1.jar:git-Paper-65]         
        at io.papermc.paper.plugin.storage.ServerPluginProviderStorage.processProvided(ServerPluginProviderStorage.java:18) ~[paper-1.20.1.jar:git-Paper-65]         
        at io.papermc.paper.plugin.storage.SimpleProviderStorage.enter(SimpleProviderStorage.java:40) ~[paper-1.20.1.jar:git-Paper-65]         
        at io.papermc.paper.plugin.entrypoint.LaunchEntryPointHandler.enter(LaunchEntryPointHandler.java:36) ~[paper-1.20.1.jar:git-Paper-65]         
        at org.bukkit.craftbukkit.v1_20_R1.CraftServer.loadPlugins(CraftServer.java:507) ~[paper-1.20.1.jar:git-Paper-65]         
        at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:273) ~[paper-1.20.1.jar:git-Paper-65]         
        at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1101) ~[paper-1.20.1.jar:git-Paper-65]         
        at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:318) ~[paper-1.20.1.jar:git-Paper-65]         
        at java.lang.Thread.run(Thread.java:833) ~[?:?]
```

> 尝试删除 **libraries** 文件夹后重新启动服务端

## 1.8版本加载错误

```
[00:00:00 ERROR]: Error occurred while enabling TrChat v2.0.0 (Is it up to date?)
java.lang.AbstractMethodError: Receiver class org.sqlite.Conn does not define or inherit an implementation of the resolved method abstract isValid(I)Z of interface java.sql.Connection
        at com.zaxxer.hikari_4_0_3.pool.PoolBase.checkValidationSupport(PoolBase.java:464) ~[?:?]
        at com.zaxxer.hikari_4_0_3.pool.PoolBase.checkDriverSupport(PoolBase.java:447) ~[?:?]
        at com.zaxxer.hikari_4_0_3.pool.PoolBase.setupConnection(PoolBase.java:416) ~[?:?]
```
> 将 **TrChat/datasource.yml** 中的 **ConnectionTestQuery** 改为 **SELECT 1**

## 数据库过时问题

```
Loading class 'com.mysql.jdbc.Driver'.This is deprecated.
```

> 将 **TrChat/datasource.yml** 中的 **DriverClassName** 改为 **com.mysql.cj.jdbc.Driver**

## PlaceholderAPI 报错问题

```
[00:00:00 WARN]: java.lang.NoSuchFieldException: ping
        at java.base/java.lang.Class.getDeclaredField(Class.java:2610)
        at com.extendedclip.papi.expansion.player.PlayerExpansion.getPing(PlayerExpansion.java:224)
        at com.extendedclip.papi.expansion.player.PlayerExpansion.onRequest(PlayerExpansion.java:184)
        at PlaceholderAPI-2.11.3.jar//me.clip.placeholderapi.replacer.CharsReplacer.apply(CharsReplacer.java:119)
        at PlaceholderAPI-2.11.3.jar//me.clip.placeholderapi.PlaceholderAPI.setPlaceholders(PlaceholderAPI.java:71)
        at PlaceholderAPI-2.11.3.jar//me.clip.placeholderapi.PlaceholderAPI.setPlaceholders(PlaceholderAPI.java:99)
        at TrChat-2.0.0.jar//me.arasple.mc.trchat.taboolib.platform.compat.PlaceholderExpansionKt.replacePlaceholder(PlaceholderExpansion.kt:21)
```

> 更新 **PlaceholderAPI** 的拓展 (主要为 **Player** )

## 与 CMI 有关问题

- #### 聊天重复

> 关闭 **CMI/Settings/Chat.yml** 中的 **ModifyChatFormat** 和 **ClickHoverMessages**

- #### 颜色权限失效

> 关闭 **CMI/Settings/Chat.yml** 中的 **Colors.CleanUp**

## EZColors (之类的插件) 不生效

> 更改聊天频道文件的默认颜色
```yaml
default-color: 
  - '%ezcolors_color%{condition: papi %ezcolors_color_set%}'
  - '&7'
```

> 更改EZColors的配置文件
```yaml
ChatListener: HIGH
```

## 聊天无法向下版本跨服

```
[00:00:00] [Server thread/WARN]: Could not pass incoming plugin message to TrChat v2.0.0
java.lang.NullPointerException: null
	at net.md_5.bungee.chat.BaseComponentSerializer.deserialize(BaseComponentSerializer.java:65) ~[patched_1.8.8.jar:git-PaperSpigot-445]
	at net.md_5.bungee.chat.TextComponentSerializer.deserialize(TextComponentSerializer.java:25) ~[patched_1.8.8.jar:git-PaperSpigot-445]
	at net.md_5.bungee.chat.TextComponentSerializer.deserialize(TextComponentSerializer.java:17) ~[patched_1.8.8.jar:git-PaperSpigot-445]
	at com.google.gson.TreeTypeAdapter.read(TreeTypeAdapter.java:58) ~[patched_1.8.8.jar:git-PaperSpigot-445]
        ...
```

在聊天频道文件中设置

```yaml
Options:
  Double-Transfer: false
```

## 聊天发包过大无法显示

```
This chat component is too big to show ( > xxx )
```

> 尝试增大 **TrChat/settings.yml** 中的 **Component-Max-Length**

## 玩家因"聊天消息验证失败"被踢出

> 关闭 **server.properties** 中的 **enforce-secure-profile**

> 关闭 **settings.yml** 中的 **Cheat-Client-Secure-Chat**

注: 原版/say等指令被踢出与trchat无关

## 玩家名字被过滤

- 关闭filter.yml中的Enable.Chat
- 在频道文件中增加

```yaml
Events:
  Process: |-
    filter get &message
```

## 如何支持换行

> 将单引号改为双引号, 示例:
```yaml
part-before-player:
  text: "\n"
```