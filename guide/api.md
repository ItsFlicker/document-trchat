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

在 ChannelEvents 前触发, `component` 仅包含玩家消息部分

```java
public class Demo implements Listener {
    
    @EventHandler
    private void onTrChat(TrChatEvent e) {
        e.getChannel(); // 获取聊天频道
        e.getSession(); // 获取聊天会话
        e.getComponent(); // 获取聊天组件 (可编辑, 自2.3.3起)
        e.setMessage("..."); // 改变聊天内容
        e.setCanceled(true); // 取消发送聊天
    }   
}
```

::: tip
自TrChat-2.0.0起, 已不会取消AsyncPlayerChatEvent
:::

::: tip
发送私聊时, 会先触发 `TrChatPrivateEvent`, 其修改会同步到 `TrChatEvent`
:::

### TrChatPrivateEvent

发送私聊时触发

```java
public class Demo implements Listener {

    @EventHandler
    private void onTrChatPrivate(TrChatPrivateEvent e) {
        e.getSender(); // 发送者
        e.getReceiver(); // 接收者 (可修改)
        e.getMessage(); // 私聊内容
        e.setMessage("..."); // 改变私聊内容
        e.setCanceled(true); // 取消发送私聊
    }
}
```

### TrChatSendEvent

消息链构造完成后触发, `component` 包含整条即将发送的聊天消息

```kotlin
class TrChatSendEvent(
    val channel: Channel,
    val session: ChatSession,
    var component: ComponentText,
    val type: Type = Type.COMMON // COMMON / SENDER / RECEIVER
) : BukkitProxyEvent() {

    val player = session.player

    fun getMessage() = component.toLegacyText()

    fun setMessage(message: String) {
        component = Components.text(message)
    }
}
```

### TrChatMentionEvent

玩家被@时触发, 取消后该玩家不会被高亮/提醒

```kotlin
class TrChatMentionEvent(
    val sender: Player,
    val receiver: String
) : BukkitProxyEvent()
```

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