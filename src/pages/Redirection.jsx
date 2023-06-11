import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Redirection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  localStorage.setItem("formID", searchParams.get("formID"));
  localStorage.setItem("volunteerFormID", searchParams.get("volunteerFormID"));
  const mainPage = () => navigate("/starting");
  useEffect(() => {
    mainPage();
  }, []);
  return <div className="redirection">Redirecting.....</div>;
}
