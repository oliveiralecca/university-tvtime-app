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

  function activeUnclickableButton(label: string) {
    if (window.location.pathname.includes("filme") && label === "Filme")
      return true;
  }

  return (
    <S.StyledButton
      $hasPath={Boolean(path)}
      $unclickableButton={activeUnclickableButton(label)}
      to={path ?? ""}
      title={label}
      className={`${activeButton() ?? ""}`}
    >
      {icon}
    </S.StyledButton>
  );
}
