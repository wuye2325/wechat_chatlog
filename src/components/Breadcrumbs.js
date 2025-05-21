import React from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Breadcrumbs = ({ path, onNavigate }) => (
  <MuiBreadcrumbs aria-label="breadcrumb" separator="/" sx={{ fontSize: '0.95rem' }}>
    {path.map((node, idx) => (
      idx < path.length - 1 ? (
        <Link
          key={node.id}
          underline="hover"
          color="inherit"
          component="button"
          onClick={() => onNavigate(path.slice(0, idx + 1))}
          sx={{ cursor: 'pointer' }}
        >
          {node.user} {idx === 0 ? "（议题）" : ""}
        </Link>
      ) : (
        <Typography key={node.id} color="text.primary" fontWeight={500}>
          {node.user} {idx === 0 ? "（议题）" : ""}
        </Typography>
      )
    ))}
  </MuiBreadcrumbs>
);

export default Breadcrumbs;
