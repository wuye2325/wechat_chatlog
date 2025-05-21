import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

const FurtherReading = ({ list }) => (
  <div style={{ marginTop: 32, padding: 24 }}>
    <Typography variant="h6" fontWeight={700} mb={2}>
      进一步阅读
    </Typography>
    <List sx={{ pl: 2 }}>
      {list.map((item, idx) => (
        <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="primary"
            fontWeight={500}
            fontSize={16}
          >
            {item.title}
          </Link>
        </ListItem>
      ))}
    </List>
  </div>
);

export default FurtherReading;
