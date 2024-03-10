# 安装

## 需求

当前支持的游戏版本: **1.8-1.20+**

| 服务端             | 兼容性             |
|-------------------|--------------------|
| Spigot            | :white_check_mark: |
| Paper             | :white_check_mark: |
| Purpur            | :white_check_mark: |
| CatServer         | :white_check_mark: |
| Arclight          | :white_check_mark: |
| Mohist            | :o:                |
| Folia             | :o:                |

::: tip
TrChat 需要联网条件下安装

不需要手动下载 TabooLib
:::

## 安装步骤

* 下载最新[发行版本](https://github.com/TrPlugins/TrChat/releases)或[开发版本](https://github.com/TrPlugins/TrChat/actions) (并非source版本)
* 将插件放入服务端下 `plugins` 文件夹
* 如有BungeeCord或Velocity群组端，同样放入 `plugins` 文件夹
* 重启服务器

::: warning
必须确保子服与群组端安装了**同一版本**的TrChat
:::

## 使用Redis

::: info
TrChat 版本: 2.0.0+
:::

settings.yml

```yaml
Redis:
  enabled: false
  host: localhost
  port: 6379
  user: ~
  password: ~
  connect: 32
  timeout: 1000
```

可完全代替BungeeCord/Velocity