import AbcIcon from "@mui/icons-material/Abc";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to="/">
      <h1 className="text-3xl font-bold text-lime-600 p-10">
        <AbcIcon />
        찰리와 영어공장
      </h1>
    </Link>
  );
}
