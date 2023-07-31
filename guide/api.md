# API

## Kether动作

### Cancel

> 取消玩家的一次聊天

`cancel`

### Channel

> 让玩家加入或退出频道

`channel (join|quit) {channel} [hint {boolean}]`

### Filter

> 检测或过滤文本中的敏感词

`filter (check|get) {text}`

## 交互

### TrChatAPI

```kotlin
interface TrChatAPI {
    fun getComponentManager(): ComponentManager
    fun getChannelManager(): ChannelManager
    fun getFilterManager(): FilterManager
    fun getClientMessageManager(): ClientMessageManager
    fun getProxyMessageManager(): ProxyMessageManager
}
```

通过`TrChat.api()`获取实例

### HookPlugin

```kotlin
object HookPlugin {
    /* 注册自定义物品展示方法 */
    fun registerDisplayItemHook(name: String, func: BiFunction<ItemStack, Player, ItemStack>)
}
```

## 事件

### TrChatEvent

```java
public class Demo implements Listener {
    
    @EventHandler
    private void onTrChat(TrChatEvent e) {
        e.getChannel(); // 获取聊天频道
        e.getSession(); // 获取聊天会话
        e.setMessage("..."); // 改变聊天内容
        e.setCanceled(true); // 取消发送聊天
    }   
}
```

::: tip
自TrChat-2.0.0起, 已不会取消AsyncPlayerChatEvent
:::

### TrChatReloadEvent

```kotlin
class TrChatReloadEvent {

    class Function(val functions: MutableList<me.arasple.mc.trchat.module.display.function.Function>) : BukkitProxyEvent() {

        override val allowCancelled: Boolean
            get() = false
    }

    class Channel(val channels: MutableMap<String, me.arasple.mc.trchat.module.display.channel.Channel>) : BukkitProxyEvent() {

        override val allowCancelled: Boolean
            get() = false
    }
}
```

### CustomDatabaseEvent

```kotlin
class CustomDatabaseEvent(val name: String, var database: Database? = null) : BukkitProxyEvent() {

    override val allowCancelled: Boolean
        get() = false
}
```