# 微信群聊结构化分析平台

> 让复杂群聊讨论变成可沉淀、可追溯、可交互的知识图谱

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.1.0-blue.svg)](https://mui.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📖 项目简介

微信群聊结构化分析平台是一个创新的 React 应用，旨在解决传统瀑布流式群聊在处理复杂议题时信息碎片化、讨论失焦、观点难以沉淀的问题。通过 AI 分析和结构化处理，将群聊内容转化为清晰、可交互的知识图谱。

### ✨ 核心特性

- 🧠 **AI 智能摘要** - 自动提炼讨论核心议题、主要观点阵营和分歧点
- 🌳 **论点树状图** - 将群聊内容按逻辑关系组织成可视化的论点树
- 🔍 **结构化讨论** - 支持递归展开的缩进式论点浏览
- 📊 **知识图谱** - 基于 vis-network 的交互式论点关系图
- 🌓 **主题切换** - 支持深色/浅色模式，提供舒适的阅读体验
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备

## 🚀 在线演示

访问 [在线演示](http://localhost:3000) 体验完整功能

## 🛠️ 技术栈

- **前端框架**: React 18.2.0
- **UI 组件库**: Material-UI 7.1.0
- **图形可视化**: vis-network 9.1.10
- **状态管理**: React Hooks (useState, useEffect, useContext)
- **样式方案**: Material-UI Theme + CSS-in-JS
- **字体**: Noto Sans SC (中文优化)
- **图标**: Material-UI Icons

## 📦 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装和运行

```bash
# 克隆项目
git clone https://github.com/wuye2325/wechat_chatlog.git

# 进入项目目录
cd wechat_chatlog

# 安装依赖
npm install

# 启动开发服务器
npm start
```

应用将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 构建文件将输出到 build/ 目录
```

## 🏗️ 项目架构

```
src/
├── components/          # React 组件
│   ├── AISummary.js        # AI 摘要组件
│   ├── ArgumentCard.js     # 论点卡片组件
│   ├── ArgumentCardList.js # 论点列表组件
│   ├── ArgumentGraphView.js # 论点图形视图
│   ├── ArgumentTreeView.js # 论点树状视图
│   ├── Breadcrumbs.js     # 面包屑导航
│   ├── FurtherReading.js  # 推荐阅读
│   ├── HeroSection.js     # 首页横幅
│   ├── StructuredDiscussion.js # 结构化讨论
│   └── ThemeToggle.js     # 主题切换
├── context/             # React Context
│   └── ThemeContext.js     # 主题上下文
├── data/               # 数据文件
│   └── chatlog.json       # 聊天记录数据
├── App.js              # 主应用组件
├── index.js            # 应用入口
└── index.css           # 全局样式
```

## 📊 数据结构

项目使用结构化的 JSON 数据来表示聊天记录分析结果：

```json
{
  "coreTopic": "核心讨论议题",
  "argumentTree": {
    "id": "节点唯一标识",
    "user": "发言人",
    "message": "发言内容",
    "timestamp": "时间戳",
    "avatar": "头像URL",
    "tag": "观点标签",
    "tagClass": "CSS类名",
    "icon": "图标类名",
    "children": ["子论点数组"]
  }
}
```

### 观点标签类型

- `Pro` - 支持
- `Con` - 反对
- `Question` - 提问
- `Suggestion` - 建议
- `Clarification` - 澄清
- `Additional Info` - 补充信息
- `Concern` - 担忧
- `Neutral/Observation` - 中立/观察

## 🎨 核心组件说明

### AISummary 组件
智能摘要组件，展示：
- 核心议题概述
- 主要观点阵营
- 各方核心论据
- 主要分歧点
- 潜在共识

### ArgumentGraphView 组件
基于 vis-network 的交互式图形视图：
- 节点点击导航
- 动态布局算法
- 主题适配

### StructuredDiscussion 组件
结构化讨论管理器：
- 面包屑导航
- 递归展开论点
- 路径状态管理

### ArgumentCard 组件
论点卡片展示：
- 发言人信息
- 观点标签和图标
- 缩进式子论点展开
- 收起/展开交互

## 🎯 功能特性详解

### 1. 智能摘要分析
- 自动识别讨论核心议题
- 提炼主要观点阵营
- 总结关键分歧点和潜在共识

### 2. 可视化论点树
- 层次化展示论点关系
- 支持无限层级嵌套
- 直观的父子关系表示

### 3. 交互式导航
- 面包屑路径导航
- 图形节点点击跳转
- 卡片展开/收起控制

### 4. 响应式体验
- 移动端优化布局
- 触摸友好的交互设计
- 自适应字体和间距

## 🔧 开发指南

### 添加新的观点标签

1. 在 `src/data/chatlog.json` 中定义新的 `tag` 和 `tagClass`
2. 在 `src/index.css` 中添加对应的样式类
3. 确保深色和浅色模式都有适配

### 自定义主题

修改 `src/App.js` 中的 Material-UI 主题配置：

```javascript
const theme = createTheme({
  palette: {
    primary: { main: "#your-color" },
    // 其他主题配置
  }
});
```

### 扩展数据源

当前项目使用静态 JSON 数据，可以扩展为：
- REST API 接口
- GraphQL 查询
- 实时 WebSocket 连接

## 📝 使用案例

当前项目展示了一个关于业主委员会治理的真实群聊讨论分析，包含：
- 津贴制度的争议
- 权责分配的讨论
- 阳光共治理念的探讨

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [React](https://reactjs.org/) - 用户界面库
- [Material-UI](https://mui.com/) - React UI 组件库
- [vis-network](https://visjs.github.io/vis-network/) - 网络图可视化
- [Noto Fonts](https://fonts.google.com/noto) - 中文字体支持

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues: [提交问题](https://github.com/wuye2325/wechat_chatlog/issues)
- 项目维护者: [@wuye2325](https://github.com/wuye2325)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！