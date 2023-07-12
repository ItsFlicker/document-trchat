# 已知问题

请仔细浏览此页面，确定没有你的问题或解决方法失效后，再开启issue

## 不支持 Folia

**[无解](https://github.com/TabooLib/taboolib/issues/317)**

## 1.8版本加载错误
```
[00:00:00 ERROR]: Error occurred while enabling TrChat v2.0.0 (Is it up to date?)
java.lang.AbstractMethodError: Receiver class org.sqlite.Connection does not define or inherit an implementation of the resolved method abstract isValid(I)Z of interface java.sql.Connection.
        at com.zaxxer.hikari_4_0_3.pool.PoolBase.checkValidationSupport(PoolBase.java:464) ~[?:?]
        at com.zaxxer.hikari_4_0_3.pool.PoolBase.checkDriverSupport(PoolBase.java:447) ~[?:?]
        at com.zaxxer.hikari_4_0_3.pool.PoolBase.setupConnection(PoolBase.java:416) ~[?:?]
```
> 将 **datasource.yml** 中的 **ConnectionTestQuery** 改为 **SELECT 1**

## 与 CMI 有关问题

- #### 聊天重复

> 关闭 **Settings/Chat.yml** 中的 **ModifyChatFormat** 和 **ClickHoverMessages**

- #### 颜色权限失效

> 关闭 **Settings/Chat.yml** 中的 **Colors.CleanUp**

## 聊天无法向下版本跨服

聊天频道文件中设置

```yaml
Options:
  Double-Transfer: false
```

## 玩家因"聊天消息验证失败"被踢出

> 关闭 **server.properties** 中的 **enforce-secure-profile**