import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import QuizIcon from "@mui/icons-material/Quiz";
import GoogleAdsense from "react-adsense-google";

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
        <GoogleAdsense
          adClient="ca-pub-5859998866190874"
          adSlot="2880745092"
          style={{ display: "block", "text-align": "center" }}
          adLayout="in-article"
          adFormat="auto"
          fullWidthResponsive="true"
        />
      </div>
    </div>
  );
}
