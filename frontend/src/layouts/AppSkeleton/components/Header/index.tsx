import { Button } from "../../../../components/Button";
import { ArrowLeftIcon } from "../../../../components/Icons";
import * as S from "./styles";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <S.Container>
      <S.Title>
        <h1>{title}</h1>
        {title !== "Dashboard" && (
          <>
            <S.Separator />
            <Button path="/home" label="Voltar" leftIcon icon={<ArrowLeftIcon />} />
          </>
        )}
      </S.Title>

      <S.ProfilePhoto
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/technologist_1f9d1-200d-1f4bb.png"
        alt="Profile image"
      />
    </S.Container>
  );
}
