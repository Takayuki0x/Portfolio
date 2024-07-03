import { NextUIProvider } from "@nextui-org/system";
import { useNavigate } from "react-router-dom";

export function Provider({ children }) {
  const navigate = useNavigate();

  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}
