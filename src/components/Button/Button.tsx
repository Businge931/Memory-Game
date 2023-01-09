import "./Button.css";
import { useAppSelector } from "../../store/hooks";
// import { useState } from "react";

type buttonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  // isActive:false
};

const Button = ({ children, onClick }: buttonProps) => {
  // const [selected, setSelected] = useState(false);

  const buttonActive = useAppSelector((state) => state.activeButton.isActive);

  return (
    <button
      onClick={onClick}
      className={`${buttonActive && "activeStyles"} button`}
    >
      {children}
    </button>
  );
};

export default Button;
