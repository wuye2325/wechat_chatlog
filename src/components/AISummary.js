import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

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

const AISummary = ({ data }) => (
  <Box component="section">
    <Typography variant="h5" fontWeight={700} mb={2}>
      AI 结构化摘要
    </Typography>
    <Stack spacing={2}>
      <Box>
        <Typography component="span" fontWeight={600} mr={1}>核心议题：</Typography>
        <Typography component="span">{data.coreTopic}</Typography>
      </Box>
      <Box>
        <Typography component="span" fontWeight={600} mr={1}>主要观点阵营：</Typography>
        <Stack component="ul" spacing={1} sx={{ pl: 3 }}>
          {data.camps.map((camp, idx) => (
            <Box component="li" key={idx} sx={{ mb: 0.5, listStyle: 'disc', pl: 1 }}>
              <Chip
                label={camp.label}
                sx={{ mr: 1, mb: 0.5, fontWeight: 600 }}
                {...tagColor(camp.tag)}
                size="small"
              />
              <Stack component="ul" spacing={0.5} sx={{ pl: 3 }}>
                {camp.arguments.map((arg, i) => (
                  <Typography component="li" key={i} variant="body2" sx={{ listStyle: 'decimal', pl: 1 }}>
                    {arg}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
      <Divider flexItem sx={{ my: 1 }} />
      <Box>
        <Typography component="span" fontWeight={600} mr={1}>主要分歧点：</Typography>
        <Typography component="span">{data.divergence}</Typography>
      </Box>
      <Box>
        <Typography component="span" fontWeight={600} mr={1}>潜在共识：</Typography>
        <Typography component="span">{data.consensus}</Typography>
      </Box>
    </Stack>
  </Box>
);

export default AISummary;
