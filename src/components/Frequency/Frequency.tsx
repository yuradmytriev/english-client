import React from "react";
import * as S from "../../pages/Word/styles";

export const Frequency = () => (
  <S.WordTitle>Frequency: </S.WordTitle>
		<span>{wordFrequency.title}</span>
	<S.Color color={wordFrequency.color} />
);
