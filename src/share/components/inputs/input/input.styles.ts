import { Typography } from 'antd';
import styled from 'styled-components';

interface IBoxInputProps {
  margin?: string;
}

export const BoxInput = styled.div<IBoxInputProps>`
  width: 100%;
  ${({ margin }) => margin && `margin:${margin}`}
`;

export const TitleInput = styled(Typography.Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin: 8px;
`;
