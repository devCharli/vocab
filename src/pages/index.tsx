import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import QuizIcon from "@mui/icons-material/Quiz";

export default function Page() {
  return (
    <div className="App">
      <div className="flex flex-col items-center mt-6">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Link to="/grammar/test">
            <ListItemButton>
              <ListItemIcon>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText primary="문법 QUIZ" />
            </ListItemButton>
          </Link>
        </List>
      </div>
    </div>
  );
}
