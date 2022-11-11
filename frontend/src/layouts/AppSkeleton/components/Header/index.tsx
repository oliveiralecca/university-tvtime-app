import { Button } from "../../../../components/Button";

type HeaderProps = {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header>
      <span>
        {title}
        {title !== 'Dashboard' && <Button path="/" label="voltar" />}
      </span>
      <span>Foto</span>
    </header>
  );
}
