import { Button } from 'antd';
import styled from 'styled-components';

interface IButtonProps {
  margin?: string;
}

export const ButtonAntd = styled(Button)<IButtonProps>`
  width: 100%;
  ${({ margin }) => margin && `margin: ${margin};`}
`;
