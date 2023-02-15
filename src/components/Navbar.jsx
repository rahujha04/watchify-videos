import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src="https://lh3.googleusercontent.com/jK97DT0-t8o2tZOfSbiccQyl7Sw7gLkfgx_FZJa0T43CO2tpq0bt21H4bE8Sy8EXsQ" alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
