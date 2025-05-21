import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const isUrl = (text) => /^https?:\/\//.test(text);

const LINK_TEXT = "子贡赎的是别人，业主帮的是自己。";

const tagColor = (tag) => {
  switch (tag) {
    case "Pro":
      return { color: "primary", variant: "filled" };
    case "Con":
      return { color: "error", variant: "filled" };
    case "Question":
      return { color: "info", variant: "outlined" };
    case "Suggestion":
      return { color: "success", variant: "outlined" };
    case "Clarification":
      return { color: "warning", variant: "outlined" };
    case "Additional Info":
      return { color: "default", variant: "outlined" };
    case "Concern":
      return { color: "warning", variant: "filled" };
    case "Neutral":
      return { color: "secondary", variant: "outlined" };
    default:
      return { color: "default", variant: "outlined" };
  }
};

// 英文标签到中文的映射
const tagMap = {
  Pro: '支持',
  Con: '反对',
  Question: '提问',
  'Suggestion/Proposal': '建议',
  Clarification: '澄清',
  'Additional Info': '补充信息',
  Concern: '担忧',
  Neutral: '中立/观察',
  'Neutral/Observation': '中立/观察',
};

// 标签到主色的映射（与 tagClass 颜色保持一致）
const tagBorderColor = {
  Pro: '#3730a3', // 深蓝，对应 .tag-pro
  Con: '#991b1b', // 红色，对应 .tag-con
  Question: '#0ea5e9', // 蓝色，对应 .tag-question
  'Suggestion/Proposal': '#166534', // 深绿色，对应 .tag-suggestion
  Suggestion: '#166534',
  Clarification: '#0369a1', // 蓝色，对应 .tag-clarification
  'Additional Info': '#7c3aed', // 紫色，对应 .tag-additionalinfo
  Concern: '#b91c1c', // 红色，对应 .tag-concern
  Neutral: '#374151', // 灰色，对应 .tag-neutral
  'Neutral/Observation': '#374151',
  Topic: '#3730a3', // 深蓝，对应 .tag-topic
};

const ArgumentCard = ({ argument, onClick, expanded }) => (
  <Box
    sx={{
      mb: 2,
      px: 2,
      py: 2,
      borderLeft: 4,
      borderColor: tagBorderColor[argument.tag] || '#2563eb',
      background: 'transparent',
      transition: 'background 0.2s',
      '&:hover': { background: 'rgba(30,58,138,0.03)' }
    }}
  >
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Avatar src={argument.avatar} alt={argument.user} sx={{ width: 44, height: 44, border: '2px solid #e0e0e0' }} />
      <Box flex={1} minWidth={0}>
        <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
          <Typography fontWeight={700} noWrap>{argument.user}</Typography>
          <Chip
            label={tagMap[argument.tag] || argument.tag}
            icon={argument.icon ? <i className={argument.icon} style={{ fontSize: 14, marginLeft: 2 }} /> : null}
            size="small"
            sx={{ fontWeight: 600, px: 1.2, py: 0.2, fontSize: 13 }}
            {...tagColor(argument.tag)}
          />
          <Stack direction="row" spacing={0.5} alignItems="center" color="text.disabled" ml={1}>
            <AccessTimeIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              {new Date(argument.timestamp).toLocaleString()}
            </Typography>
          </Stack>
        </Stack>
        <Typography sx={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}>
          {isUrl(argument.message) ? (
            <a
              href={argument.message}
              style={{ color: '#2563eb', textDecoration: 'underline' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {LINK_TEXT}
            </a>
          ) : (
            argument.message
          )}
        </Typography>
        {argument.children && argument.children.length > 0 && (
          <Button
            variant="text"
            size="small"
            onClick={onClick}
            sx={{ color: 'primary.main', fontWeight: 500, mt: 0.5 }}
          >
            {expanded ? "收起" : `查看/回应（${argument.children.length}）`}
          </Button>
        )}
      </Box>
    </Stack>
  </Box>
);

export default ArgumentCard;
