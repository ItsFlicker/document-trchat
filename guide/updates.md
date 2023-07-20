# 更新日志

## VERSION 2.0
- #### 2.0.2 (2023.7.20)
  - 支持hover内使用Kether内联
  - 增加%trchat_lastprivatemessage%
  - 增加更改最大聊天发包大小的选项
  - 增加关闭更新检测的选项
  - 在Paper环境中取消原版控制台聊天显示
  - 修复高版本龙核无法使用hex颜色
  - 修复潜在的papi/Kether替换漏洞

- #### 2.0.1 (2023.7.18)
  - 修复1.19.2补全发包错误
  - 修跨服频道不自动重载
  - 修复数据库报错
  - 修复Force-Proxy选项
  - 修复GitHub Actions发布
  
- #### 2.0.0 (2023.7.9)
  - ##### 修复
    - 后台使用喊话功能时重复
    - 在Arclight无法使用
    - 不支持跨服屏蔽/禁言玩家
    - 在Velocity报错
    - 数据库报错
    - 关闭服务器时任务未正确关闭
    - At功能出错
    - 部分服务端后台信息重复
    - 私聊提醒不生效
  - ##### 新增
    - Redis支持所有Bungee/Velocity的功能
    - 在1.19+可以在聊天中补全群组所有玩家

## VERSION 1.9
- #### 1.90-R4
  - Since 2021.12.4
  - Updates:
    - 支持1.18
    - 迁移数据库
    - 迁移配置文件
    - 修复回复私聊(/reply)指令
    - 添加过滤开关
- #### 1.90-R3
  - Updates:
    - 修复阻止Tab补全功能
    - 简化代码
    - 修复最新paper无法使用(更新TabooLib至6.0.4-1)
- #### 1.90-R2
  - Updates:
    - 支持渐变色和彩虹色
    - 修复 Bungee 报错无法进入问题
    - 添加撤回消息功能
    - 支持 DiscordSRV
    - 支持转发更长的插件消息
    - 添加自动删除日志功能
    - 升级云端词库功能
    - 升级控制面板功能
    - 优化权限节点和文件监听
- #### 1.90-R1
  - Since 2021.9.13
  - Updates:
    - 默认颜色支持HEX颜色
    - 配置文件支持渐变色
    - 支持原版社交系统
    - 优化 Bungee 和 Velocity 的消息转发
    - 修复 1.17 延迟异常问题

## VERSION 1.8
- #### 1.84
  - Since 2021.9.11
  - Updates:
    - 重制频道功能 (支持自定义频道)
    - 重制聊天内部事件
    - 修复私聊的严重bug
    - 优化有关 NMS 和 OBC 的代码
    - 升级脚本模块
    - 修复一些兼容性bug
- #### 1.83
  - Since 2021.8.27
  - Updates:
    - 升级 TabooLib 至正式版 6.0.0
    - 添加 mirror 功能 (/trchat mirror)
    - 增强 requirement 功能
    - 修复一堆bug
    - 优化性能
- #### 1.82
  - Since 2021.8.22
  - Updates:
    - 支持 Velocity 跨服端
    - 修复上个版本中 ORIGIN-NAME 不生效
- #### 1.81
  - Since 2021.8.19
  - Updates:
    - 修复强制聊天颜色权限不生效
    - 支持 formats 和 function 替换优先级 (priority)
    - 修复展示空气时报错
    - 可选择展示物品是否展示经过铁砧改动的名字 (ORIGIN-NAME: false)
    - 非私聊支持消息后缀 (suffix)
    - 修改语言文件中的 BLOCK_NOTE_BLOCK_PLING (低版本不存在)
    - 优化启动时的 motd (感谢 @Tontto )
    - 修复上个版本中 AT 无效
    - 支持所有 JSON 的 HEX 颜色
    - 支持 JSON 复制到剪贴板动作 (copy)
    - 支持 Dynmap 聊天
- #### 1.80
  - Since 2021.8.15
  - Updates:
    - 升级 TabooLib 至 6.0.0-pre45
    - 主要代码用 kotlin 重写
    - 扁平化语言文件,优化一些节点
    - 支持 1.17
    - 支持 1.16 HEX颜色代码 (perm: trchat.color.*) ```eg: &{#FFFFFF}```
    - 增加屏蔽功能 (/ignore)
    - 修复 Java16 的 js 执行
    - 修复敏感词过滤器
    - 修复日志系统
    - 优化配置文件
    - 修复在 1.17 中的发包监听器
    - 修复无法展示带有 PublicBukkitValues 标签的物品
    - 添加 GlobalShoutEvent

## VERSION 1.7
  - #### 1.70
    - Since: 2020.1.15
    - Updates:
      - 新增 en_US 语言，默认
      - 更新 TabooLib 至 5.14
      - 相关配置文件的默认注释更改为英文
      - 发布至 SpigotMC
      - 修复了 v1.62 中的空指针报错
      - 默认情况下关闭云端词库
      - R2
        - 优化了英文语言下物品名称获取方式
        - 新增 Command Controller 命令控制系统, 黑白名单任选
        - ^ 支持正则表达式匹配、自定义参数是否忽略、绕过权限以及 TLocale 反馈消息
        - ^ (请参考新版本，手动添加新的配置项)
      - R3
        - CommandController 将自动检测别称命令的主命令判断
        - 修复了 Function 模块的 {0} 变量无法在 text 中使用
## VERSION 1.6
  - #### 1.62
    - DATE： 2019.12.1
    - OVERVIEW:
      - 修复了 Bungee 版不工作
      - 现在单个 JSON 组件也支持使用 "Requirement" 属性
      - 移除调试信息
      - 强制全局喊话现在将记录在后台
      - 修复了跨服私聊变量报错
      - 修复同服 At 重复的问题
      - 现支持在全局喊话中 At 玩家
      - 过滤器菜单别称新增 /chatfilter, /trfilter
      - 修复了云端词库 连不上/不显示 的问题
      - 修复了聊天日志不能追加写入的问题
      - 新增语言项支持自定义监听聊天的格式
      - 支持 1.15 版本
      - 修复了一个数据包监听报错
      - 新增强制全局喊话的前缀
      - 修复了 PlaceholderAPI 下载链接失效
      - 修复了铁砧敏感词库无法过滤的问题
  - #### 1.61
    - DATE： 2019.11.30
    - OVERVIEW:
      - 修正裁剪了敏感词库
      - 修复了监听格式错误
      - 修复了 JSON 模块悬浮信息末尾少了字符
      - 新增手动重载方式，聊天框内喊："#TRCHAT-RELOAD"
  - #### 1.6
    - DATE： 2019.11.30
    - OVERVIEW:
      - 该版本重制了许多的内容，重构了大量模块
      - 为了顺利更新到新版本，你需要删除旧文件夹
      - 敬请享用
    - LOG:
      - 优化了更新检测器
      - 新增检测提醒用户删除旧版本文件夹
      - 优化、重写了大量代码
      - 配置文件结构革新
      - PlaceholderAPI 为必需前置，若未安装将自动下载重启
      ![](https://i.loli.net/2019/11/30/M7QuCip2jZUNkGd.png)
      - 功能性：
        - 聊天日志，记录存储详尽的内容
        - 改进聊天控制系统
          - 新增反复读
            - 匹配文本相似度
            - 自定义 TLocale 提示
      - 过滤器：
        - 云端词库新增大量内容, 1.2w+
        - 云端词库新增阿里云镜像，双重下载源保障
        - 监听多种数据包处理过滤
        - 每名玩家独立的开关配置
        - 可视化 GUI 控制过滤器开关
        ![](https://i.loli.net/2019/11/30/wxynG2okcFpLj4l.png)
      - 聊天格式：
        - 优先级筛选支持使用 JS 表达式
      - 聊天频道：
        - 现在支持强制全局聊天
      - 聊天功能：
        - 新增 URL展示，将链接缩短为一个自定义格式的 JSON 模块
        - 新增 B站分享，将av号视频缩短为一个超链接 JSON 模块
        - 新增 手机号/身份证 屏蔽隐藏为 JSON 模块
        - 新增 QQ号快速分享，缩短为一个超链接 JSON 模块
        - 不仅如此，你可以自定义编辑匹配，触发替换内容
        ![](https://i.loli.net/2019/11/30/2WVEyrz4jYZwgmI.png)
        ![](https://i.loli.net/2019/11/30/lWYbH7ztPJVfSje.png)
        ![](https://i.loli.net/2019/11/30/onepTGQrh8yNamz.png)
        
## VERSION 1.5
  - #### 1.51
    - 修复了部分情况下 PlaceholderAPI 的报错
    - 修复了配置文件控制颜色代码开关无效的问题
    - 新增了强制默认聊天颜色的权限节点 trchat.color.force-defaultcolor
    - 屏蔽了 bStats 的一个报错
    - 优化了更新检测器

## Old logs
	Version 1.5:
		Date: 2019.10.19    
		Updates:
		 - 改进部分代码
		 - 修复 "functions" 命名错误
		 - 修复了一些报错
		 - 正式改名为 TrChat, 更新介绍图

	Version 1.4:
		Date: 2019.10.12
		Updates:
		 - [!] 该版本重制配置文件内容较多, 请备份+删除 TrChat文件夹 后更新
		 - >>
		 - 配置文件重写, 分为 settings.yml / formats.yml / filter.yml / functions.yml
		 - 云端敏感词库上线, 自动更新敏感词、支持自定义白名单词 (正在持续增加中)
		 - 每个聊天频道均支持多个自定义聊天格式，优先级权限筛选
		 - 添加了一个选项，可以自动下载并载入指定PAPI变量拓展
		 - 修复了1.12展示物品报错
		 - 修复了旧版本的各种错误、漏洞
		 - 移除了 PerWorldChat 功能

	Version 1.3X:
		Date: 2019.8.30 - 2019.9.13
		Updates:
  		 1.31:
  		 - 新增 @At 在线玩家功能 (音效+TITLE提示/忽略大小写式判断/自定义At文字高亮)
  		 1.32:
  		 - 修复消息默认彩色代码配置问题
  		 - 现在颜色代码也可以在编辑书中使用(需要指定权限)
  		 1.33:
  		 - 修复玩家数据报错
  		 - 修复API事件不被call
  		 - 自动更新配置文件选项
  		 - 聊天内容的发包将改为 CHAT 类型
  		 - 依赖更至 Taboolib v5.04
  		 1.34:
  		 - 修复 <> 中内容消失的问题
  		 - 禁止在私聊中At玩家
  		 - 新增At玩家的冷却 (常规/单个玩家冷却)
  		 - 缓存展示物品，提高性能
  		 1.35:
  		 - 修复了数据读写的问题
  		 - 修复了v1.34新增的BUG
  		 - 重写了更新检测器
  		 - 移除了控制面板
  		 - 新增聊天内容字符长度的限制
  		 1.36:
  		 - 增加了更多 bStats 自定义统计项
  		 - 修复了私聊中过滤器绕过权限无效的问题
  		 - 改进了过滤器
  		 1.37:
  		 - 修复了 GlobalShoutEvent & PrivateMessageEvent
  		 - 修复了 私聊报错问题
  		 - 现在可以通过 "[展示物品变量]-[槽位]" 来展示背包指定位置的物品
  		 - 👆 例如 %i-0 ~ %i-9
  		 1.38:
  		 - 修复了1.12版无法全局喊话问题
  		 1.39:
  		 - 修复了At功能

	Version 1.3:
		Date: 2019.8.18
		Updates:
		 - 依赖更新至 Taboolib v5.03
		 - 改进了基于权限的彩聊代码处理
		 - 改进了插件部分服务注入方式
		 - 改进了控制面板GUI跨版本物品兼容
		 - 改进了私聊频道代码
		 - 改进了物品展示处理方式
		 - 修复了自定义物品展示代码失效
		 - 一条消息现在支持同时展示多个物品
		 - 改由 Taboolib 存储数据
		 - 新增命令 /spy, 在游戏内切换是否监听玩家私聊
		 - 现在颜色代码的权限支持木牌/铁砧使用彩色代码！
		 - 新增多个配置节点决定是否启用颜色代码功能
		 - 炫酷的载入文字画LOGO (可修改/关闭)
		 - bStats 更换为 MetricsLite 并优化, 减小了插件体积
		 - 提供了牛逼的API (TrChatAPI) 方便自定义拓展
		 - LChatPrivateMessageEvent - API 私聊事件
		 - LChatShoutEvent - API 私聊事件
		 - 配置文件大改, 新增配置版号 (自动备份更新)

	Version 1.2:
		Date: 2019.8.17 20:30
		Updates:
		 - 支持 CatServer
		 - 全局喊话将强制要求Bungee启用, 否则则提示玩家
		 - 修复了聊天冷却发送时事件未取消的问题
		 - 更新通知新增 Mcbbs 地址

	Version 1.1:
		Date: 2019.8.17 13:30
		Updates:
		 - 优化代码
		 - 自动读取 spigot.yml 配置判断是否启用 Bungee 支持
		 - 管理频道支持单独 Spigot 使用
		 - 现在即使未在管理频道, 也可通过/staff [MESSAGE]发送管频消息
		 - 改进BungeeCord的监听器

	Version 1.0:
		Date: 2019.8.16
		Updates:
		 - 正式版