import { ReactNode, useState } from "react";
import * as S from "./styles";

type NavButtonProps = {
  path?: string;
  icon: ReactNode;
  label: string;
};

export function NavButton({ path, icon, label }: NavButtonProps) {
  function activeButton() {
    if (!path) return;
    if (window.location.pathname === path) return "active";
  }

  return (
    <S.StyledButton
      path={!!path}
      to={path ?? ""}
      title={label}
      className={`${activeButton() ?? ""}`}
    >
      {icon}
    </S.StyledButton>
  );
}
