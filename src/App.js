import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HeroSection from "./components/HeroSection";
import AISummary from "./components/AISummary";
import StructuredDiscussion from "./components/StructuredDiscussion";
import FurtherReading from "./components/FurtherReading";
import chatlog from "./data/chatlog.json";
import ArgumentGraphView from "./components/ArgumentGraphView";

export default function App() {
  // 主题切换
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode,
      primary: { main: "#3b82f6" },
      background: {
        default: mode === "light" ? "#f5f7fa" : "#181c24",
        paper: mode === "light" ? "#fff" : "#23272f"
      },
      text: {
        primary: mode === "light" ? "#1e293b" : "#f5f7fa",
        secondary: mode === "light" ? "#64748b" : "#b0b8c1"
      }
    },
    components: {
      MuiBox: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              backgroundColor: undefined,
              color: "#f5f7fa"
            })
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              backgroundColor: "#23272f",
              color: "#f5f7fa"
            })
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              backgroundColor: "#334155",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              boxShadow: "0 2px 8px 0 rgba(30,41,59,0.10)",
              transition: "background 0.2s",
              '&:hover': {
                backgroundColor: "#3b82f6",
                color: "#fff"
              }
            })
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              backgroundColor: "#23272f",
              color: "#3b82f6",
              '&:hover': {
                backgroundColor: "#334155"
              }
            })
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              backgroundColor: "#334155",
              color: "#f5f7fa"
            })
          }
        }
      }
    },
    typography: {
      fontFamily: [
        "Noto Sans SC",
        "Tahoma",
        "Arial",
        "Roboto",
        "Droid Sans",
        "Helvetica Neue",
        "Droid Sans Fallback",
        "Heiti SC",
        "Hiragino Sans GB",
        "Simsun",
        "sans-serif"
      ].join(",")
    }
  });

  // 论点路径：根节点到当前节点的数组
  const [argumentPath, setArgumentPath] = useState([chatlog.argumentTree]);

  // 路径导航
  const handleNavigate = (pathArr) => setArgumentPath(pathArr);

  // Mermaid节点点击
  const handleTreeNodeClick = (nodeId) => {
    // 递归查找路径
    const findPath = (node, targetId, path = []) => {
      if (node.id === targetId) return [...path, node];
      if (!node.children) return null;
      for (let child of node.children) {
        const res = findPath(child, targetId, [...path, node]);
        if (res) return res;
      }
      return null;
    };
    const path = findPath(chatlog.argumentTree, nodeId) || [chatlog.argumentTree];
    setArgumentPath(path);
  };

  // 当前层级的子论点
  const currentNode = argumentPath[argumentPath.length - 1];
  const currentChildren = currentNode.children || [];

  // AI摘要数据（可根据实际需求调整结构）
  const aiSummaryData = {
    coreTopic: chatlog.coreTopic,
    // 这里可用算法自动提炼主要阵营、分歧点、共识等
    // 示例数据
    camps: [
      { tag: "Pro", label: "支持补贴", arguments: ["补贴可激励参与"] },
      { tag: "Con", label: "反对补贴", arguments: ["补贴易引发争议"] }
    ],
    divergence: "是否应设补贴、如何监督业委会权力",
    consensus: "需提升业主集体参与度，保障公开透明"
  };

  // 推荐阅读（示例）
  const furtherReading = [
    { title: '阳光共治:让小区治理从"家长制"回归"集体决策"', url: "https://yggz.xyz/" }
  ];

  // 动态设置 body 和 #root 背景色，确保深色模式下全局背景同步
  useEffect(() => {
    const bg = mode === "light" ? "#f5f7fa" : "#181c24";
    document.body.style.backgroundColor = bg;
    const root = document.getElementById("root");
    if (root) root.style.backgroundColor = bg;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* 顶部主题切换 */}
      <Box position="fixed" top={24} right={32} zIndex={1200}>
        <Tooltip title={mode === "light" ? "切换深色模式" : "切换浅色模式"}>
          <IconButton
            color="primary"
            sx={{
              bgcolor: "background.paper",
              boxShadow: 3,
              "&:hover": { bgcolor: "primary.light" }
            }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* HeroSection */}
        <Box mb={6}>
          <HeroSection
            title="群聊结构化分析"
            subtitle="让复杂群聊讨论变成可沉淀、可追溯、可交互的知识图谱"
          />
        </Box>
        {/* AI 摘要 */}
        <Box mb={4} px={{ xs: 0, md: 2 }}>
          <Box mb={1}>
            <Box sx={{ fontWeight: 600, color: 'primary.main', fontSize: 16 }}>来源:业主攻略·云帆</Box>
          </Box>
          <AISummary data={aiSummaryData} />
        </Box>
        {/* 知识图谱 */}
        <Box mb={4} px={{ xs: 0, md: 2 }}>
          <ArgumentGraphView
            argumentTree={chatlog.argumentTree}
            onNodeClick={handleTreeNodeClick}
          />
        </Box>
        {/* 结构化讨论 */}
        <Box mb={4} px={{ xs: 0, md: 2 }}>
          <StructuredDiscussion
            argumentTree={chatlog.argumentTree}
            argumentPath={argumentPath}
            onNavigate={handleNavigate}
            onTreeNodeClick={handleTreeNodeClick}
          />
        </Box>
        {/* 推荐阅读 */}
        <Box px={{ xs: 0, md: 2 }}>
          <FurtherReading list={furtherReading} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}