/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface Props {
  name: string;
}

const Container = styled.p`
  padding: 14px;
`;

export const SubMenuPage = ({ name }: Props) => <Container>Hello {name}!</Container>;
