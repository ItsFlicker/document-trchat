# TrChat Update Logs #

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
  - Fixed 1.19.2 proxy messaging error
  - Fixed #264 (proxy channels don't auto reload after restarting)
  - Fixed database error
  - Fixed Force-Proxy
  - Fixed GitHub actions
  
- #### 2.0.0 ()
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

#### VERSION 1.9

- #### 1.90-R2
    - Updates:
        - Supported rainbow and gradients colors
        - Fixed an issue that caused Bungee can not join
        - Added withdraw message feature
        - Supported DiscordSRV
        - Supported forward longer plugin messages
        - Added a feature that automatically delete logs
        - Upgrade cloud thesaurus feature
        - Upgrade control panel feature
        - Optimized permission nodes and file listener
- #### 1.90-R1
    - Since 2021.9.13
    - Updates:
        - Default colors supported HEX colors
        - Configuration files supported gradient colors
        - Supported vanilla social system
        - Optimized message forwarding for Bungee and Velocity
        - Fixed 1.17 delay exception issue

#### VERSION 1.8
  ```
  - This version maintained by ItsFlicker
  
  - tips: Anti-TabComplete permission for 1.13+ is: trchat.bypass.tabcomplete
  ```
- #### 1.84
    - Since 2021.9.11
    - Updates:
        - Remake channel feature (support custom channels)
        - Remake chat internal events
        - Fixed a serious bug of private chat
        - Optimized code related to NMS and OBC
        - Upgrade Script module
        - Fixed some compatibility bugs
- #### 1.83
    - Since 2021.8.27
    - Updates:
        - Update TabooLib to release 6.0.0
        - Add mirror feature (/trchat mirror)
        - Enhanced requirement feature
        - Fixed a bunch of bugs
        - Optimized performance
- #### 1.82
    - Since 2021.8.22
    - Updates:
        - Supported Velocity
        - Fixed ORIGIN-NAME not taking effect in the previous version
- #### 1.81
    - Since 2021.8.19
    - Updates:
        - Fixed the color permission of forced chat that does not take effect
        - Supported 'formats' and 'function' replacement priority
        - Fix an error reported when showing air
        - Added the option to show or not show the name of the item changed with the anvil when showing it (ORIGIN-NAME: false)
        - Message suffix support when not in private chat (suffix)
        - Edited BLOCK_NOTE_BLOCK_PLING in the language file (Not available in lower versions)
        - Optimize the motd on plugin startup (感谢 @Tontto )
        - Fixed the invalid AT in the previous version
        - Supported all JSON HEX colors
        - Supported JSON copy to clipboard action (copy)
        - Dynmap chat support
- #### 1.80
    - Since 2021.8.15
    - Updates:
        - Update TabooLib to 6.0.0-pre45
        - Main code rewritten in kotlin
        - Flattened language files, optimized some nodes
        - Supported 1.17
        - Supported 1.16 HEX color codes (perm: trchat.color.*)
        - ^ ```eg: &{#FFFFFF}```
        - Added ignore feature (/ignore)
        - Fixed js execution for Java16
        - Fixed the sensitive word filter
        - Fixed the log system
        - Optimized Configurations
        - Fixed packet sending listener in 1.17
        - Fixed the inability to show items with PublicBukkitValues tags
        - Added GlobalShoutEvent

#### VERSION 1.7

- #### 1.70
    - Since: 2020.1.15
    - Updates:
        - Added en_US locale as default
        - Update TabooLib to 5.14
        - Fixed a error in v1.62
        - R2
            - Fixed item-display can not get the local item name
            - Added Command Controller, white/black list for commands
            - ^ Support regex, arguments ignore, bypass permission and TLocale response
            - ^ (Please refer to the new version and manually update the settings)
        - R3
            - Command Controller will now check aliases of command
            - Fixed a variable issue in function.yml
        - R4
            - Fixed small bugs
            - Added anti-tab for 1.13+, bypass permission `trchat.bypass.tabcomplete`
        