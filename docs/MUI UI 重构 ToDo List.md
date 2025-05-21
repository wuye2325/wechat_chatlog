MUI UI 重构 ToDo List
1. 全局主题与基础结构
[x] 安装 MUI 相关依赖（@mui/material, @emotion/react, @emotion/styled, @mui/icons-material）
[x] 用 MUI 的 ThemeProvider、CssBaseline、Container、Box 重构 App.js 的整体布局
[x] 实现顶部主题切换按钮（IconButton + Tooltip + LightModeIcon/DarkModeIcon）
2. HeroSection 组件
[x] 用 MUI 的 Typography、Box 实现大标题、副标题，居中对齐
[x] 优化字体、间距、响应式
3. AISummary 组件
[x] 用 Stack、Typography、Chip、Divider 等组件分组展示摘要内容
[x] 主要观点阵营用 Chip 或自定义色块区分
[x] 分歧点、共识用 Divider 分隔
4. StructuredDiscussion 相关组件
[x] 用 Paper/Card/Accordion/Stack 重构 StructuredDiscussion 的外层容器
[x] Breadcrumbs 组件用 MUI 的 Breadcrumbs 组件重构
[x] ArgumentCardList/ArgumentCard 用 Card、Avatar、Chip、Button、Stack 实现递归缩进、卡片风格、标签色彩
[ ] "查看/回应"按钮用 Button，展开/收起用 Accordion 或自定义展开动画
[ ] 标签（Pro/Con/Question等）用 Chip 并自定义颜色
[ ] 时间戳、头像、发言人信息用 Avatar+Typography+Stack 布局
5. FurtherReading 组件
[x] 用 List、ListItem、Link、Typography 实现推荐阅读列表
[x] 优化为响应式、卡片式展示
6. 设计风格与细节
[ ] 统一主色调（深蓝/灰蓝），强调色用 secondary
[ ] 所有 Paper/Card/Chip/Button 等用 sx 属性调整圆角、阴影、间距
[ ] 保持响应式，移动端适配
[ ] 图标全部用 @mui/icons-material
7. 代码优化与注释
[ ] 组件代码增加注释，props 类型说明
[ ] 目录结构整理，components/ 下每个组件单独文件
进度建议
建议每完成一个组件的重构就测试效果，遇到具体实现问题随时提问。
如果你需要某个组件的 MUI 重构代码，直接告诉我组件名即可！ 