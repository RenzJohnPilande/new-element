import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const ActionButton = ({ label, toAction }) => {
  return (
    <Button className="rounded-lg bg-slate-950 hover:bg-slate-950/90 px-5">
      <Link to={toAction}>{label}</Link>
    </Button>
  );
};
