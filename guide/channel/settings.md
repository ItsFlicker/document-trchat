# 频道设置

## 选项

```yaml
Options:
  # 需要权限才能可以加入频道(听到消息)
  Join-Permission: 'trchat.admin'
  # 需要条件才能发送消息
  Speak-Condition: 'perm *trchat.admin'
  # 有权限时自动加入
  Auto-Join: true
  # 是否为私聊频道
  Private: false
  # 聊天可视范围
  Target: 'all/single_world/distance;10/self'
  # 是否跨服
  Proxy: false
  # 是否必须跨服才能使用
  Force-Proxy: false
  # 二次转发(子服>跨服端>子服)
  Double-Transfer: true
  # 哪些子服可以接收,写端口名,~代表所有
  Ports: 25565;...;.../~
  # 禁用function.yml的模块
  Disabled-Functions: ['Mention']
  # 有敏感词就会禁止发送
  Filter-Before-Sending: false
  # 是否传输消息到DiscordSRV
  Send-To-Discord: true
  # 是否接受DiscordSRV的消息
  Receive-From-Discord: true
```

## 绑定 Bindings

```yaml
Bindings:
  # 在聊天中使用前缀触发
  Prefix: ['!all','...']
  # 使用命令触发
  Command: ['msg','...']
```

- 在普通频道中
  - 使用`/命令`可以进入或退出频道
  - 使用`/命令 消息`可以发送消息而不进入频道
- 在私聊频道中
  - 使用`/命令`可以退出频道
  - 使用`/命令 玩家`可以进入私聊频道
  - 使用`/命令 玩家 消息`可以发送私聊而不进入频道

## 事件 Events

### Process

> 传递`TrChatEvent`后，构建`Component`前触发

#### 返回值

- Boolean类型: true发送, false取消（使用动作`exit`可达成同样效果）
- String类型: 更改发送内容为返回值
- 其他类型: 无效果

#### 变量

- `message`: 玩家发送的消息
- `forward`: 是否实际发送

#### 示例

```yaml
Events:
  Process: |-
    if check papi "%xconomy_balance_value%" > 50 then {
      command inline "bal take {{ sender }} 50" as console
    } else {
      tell "金币不足,无法喊话."
      exit
    }
```

---

### Send

> 发送给每个玩家时，依次触发

#### 返回值

- Boolean类型: true发送, false取消（使用动作`exit`可达成同样效果）
- 其他类型: 无效果

#### 变量

- `receiver`: 消息接收者
- `message`: 玩家发送的消息

---

### Join

> 玩家加入时触发

---

### Quit

> 玩家退出时触发