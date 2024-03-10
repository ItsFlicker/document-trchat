# 配置

## 语言文件

[使用方法](https://plugins.ptms.ink/function/language/)

## settings.yml

```yaml
Options:
  # 是否检查更新并提醒
  Check-Update: true
  # 强制使用跨服类型, 识别错误时可更改(AUTO, NONE, BUNGEE, VELOCITY)
  Proxy: AUTO
  # 记录普通聊天格式到plugins/TrChat/logs目录下的格式
  Log-Normal: '[{0}] {1}: {2}'
  # 记录私聊聊天格式到plugins/TrChat/logs目录下的格式
  Log-Private: '[{0}] {1} -> {2}: {3}'
  # 自动删除多少天前的聊天记录
  Log-Delete-Time: 0
  # 强制变量扩展
  Depend-Expansions: ['player', 'server']
  # 是否禁止玩家使用tab补全命令
  Prevent-Tab-Complete: false
  # 聊天发包最大长度限制
  Component-Max-Length: 32766
  # 是否允许Kether宽容解析
  Kether-Allow-Tolerance-Parser: true
  # 欺骗客户端已开启安全聊天 (阻止右上角弹窗)
  Cheat-Client-Secure-Chat: true
  # 禁用的命令
  Disabled-Commands: []
  

# 默认频道
Channel:
  Default: 'Normal' # 改为Global即可全局跨服聊天

# 数据库
Database:
  # 数据库类型 (SQLite,SQL)
  Method: SQLite
  SQL:
    # 数据库地址
    host: localhost
    # 数据库端口
    port: 3306
    # 数据库用户名
    user: root
    # 数据库密码
    password: root
    # 数据库名
    database: trchat
    # 数据库表名
    table: trchat_user_data

# Redis相关配置
Redis:
  enabled: false
  host: localhost
  port: 6379
  user: ~
  password: ~
  connect: 32
  timeout: 1000

# 聊天功能
Chat:
  # 内容相似度防刷屏 (设为0禁用)
  Anti-Repeat: 0.75
  # 聊天间隔冷却
  Cooldown: '2s'
  # 最大聊天长度
  Length-Limit: 100

# 颜色转换
Color:
  # 聊天颜色
  Chat: true
  # 牌子颜色
  Sign: true
  # 铁砧颜色
  Anvil: true
  # 书本颜色
  Book: true
```

## filter.yml

```yaml
Enable: 
  # 聊天内容是否检测
  Chat: true
  # 告示牌是否检测
  Sign: true
  # 铁砧改名是否检测
  Anvil: true
# 云端词库
Cloud-Thesaurus:
  Enabled: true
  # 忽略词库中的内容
  Ignored: ['nt'] 
  # 词库地址
  Urls: 
    - 'https://raw.githubusercontent.com/Yurinann/Filter-Thesaurus-Cloud/main/database.json'
    - 'https://raw.githubusercontent.com/konsheng/Sensitive-lexicon/main/ThirdPartyCompatibleFormats/TrChat/SensitiveLexicon.json'
#本地词库
Local:
  - 'NMSL'
  - 'fuck'
  - 'shit'
# 敏感词白名单 (WIP)
WhiteList: ['has been']
# 替换成的内容 (WIP)
Replacement: '*'
```