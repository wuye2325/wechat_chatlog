import React, { useState } from "react";
import ArgumentCard from "./ArgumentCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ArgumentCardList = ({ arguments: args, level = 0 }) => {
  if (!args || args.length === 0) {
    return (
      <Box sx={{ py: 6, textAlign: 'center', color: 'text.disabled' }}>
        暂无子论点
      </Box>
    );
  }

  return (
    <Box sx={level > 0 ? { ml: { xs: 2, md: level * 4 } } : {}}>
      {args.map((arg) => (
        <ArgumentCardWithChildren key={arg.id} argument={arg} level={level} />
      ))}
    </Box>
  );
};

const ArgumentCardWithChildren = ({ argument, level }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded((prev) => !prev);

  return (
    <Box>
      <ArgumentCard
        argument={argument}
        onClick={argument.children && argument.children.length > 0 ? handleExpand : undefined}
        expanded={expanded}
      />
      {expanded && argument.children && argument.children.length > 0 && (
        <Box sx={{ borderLeft: 2, borderColor: 'divider', ml: 3, pl: 2, mt: 1 }}>
          <ArgumentCardList arguments={argument.children} level={level + 1} />
        </Box>
      )}
    </Box>
  );
};

export default ArgumentCardList;
