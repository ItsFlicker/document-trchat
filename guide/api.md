# API

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

发送聊天时触发

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

### TrChatItemShowEvent

展示物品时触发

```kotlin
class TrChatItemShowEvent(
    val player: Player,
    var item: ItemStack,
    val isCompatibleMode: Boolean
) : BukkitProxyEvent() {

    override val allowCancelled: Boolean
        get() = false

}
```

### TrChatReceiveEvent

每个玩家收到聊天时触发

```kotlin
class TrChatReceiveEvent(
    val receiver: CommandSender,
    var sender: UUID?,
    var message: ComponentText,
    val session: ChatSession? = (receiver as? Player)?.session
): BukkitProxyEvent() {

    val player = session?.player
}
```

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