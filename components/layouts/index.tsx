import { ReactNode } from "react";
import Header from "../header";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props : LayoutProps) {

    const {children} = props;
  return (
    <div>
    <Header />  
    <div>{children}</div>
    </div>
  )
}
