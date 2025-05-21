import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ArgumentCardList from "./ArgumentCardList";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StructuredDiscussion = ({ argumentTree, argumentPath, onNavigate }) => {
  // 本地管理展开的路径（每一层一个节点）
  const [localPath, setLocalPath] = useState(argumentPath);

  // 展开下一级
  const handleExpand = (node) => {
    setLocalPath([...localPath, node]);
  };

  // 返回上一层
  const handleCollapse = () => {
    if (localPath.length > 1) {
      setLocalPath(localPath.slice(0, -1));
    }
  };

  // 跳转到某层（面包屑导航）
  const handleBreadcrumb = (pathArr) => {
    setLocalPath(pathArr);
  };

  // 当前层节点
  const currentNode = localPath[localPath.length - 1];
  const currentChildren = currentNode.children || [];

  return (
    <Box component="section" sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <Breadcrumbs path={localPath} onNavigate={handleBreadcrumb} />
        {localPath.length > 1 && (
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            size="small"
            sx={{ alignSelf: "flex-start", mb: 1 }}
            onClick={handleCollapse}
          >
            返回上一层
          </Button>
        )}
        <ArgumentCardList
          arguments={currentChildren}
          onCardClick={handleExpand}
        />
      </Stack>
    </Box>
  );
};

export default StructuredDiscussion;
