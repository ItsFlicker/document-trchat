# 跨服功能

## 频道配置

```yaml
Options:
    Proxy: true
```

::: tip
默认配置中除Normal均支持跨服
:::

## 平台

### BungeeCord / Velocity

* 将插件放入`plugins`文件夹, 即可正常使用
* 跨服端上的频道文件, 所有子服都可使用
* `/muteallservers on/off` 可控制所有子服的全体禁言

::: warning
必须确保子服与群组端安装了**同一版本**的TrChat
:::

### Redis

settings.yml
```yaml
Redis:
  # 改为true启用
  enabled: false
  host: localhost
  port: 6379
  user: ~
  password: ~
  connect: 32
  timeout: 1000
```

* 适用于群组结构复杂的情况
* Redis在子服无玩家时也可通信