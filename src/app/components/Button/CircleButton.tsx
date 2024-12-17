import React from 'react';
import styled from 'styled-components';

const Circle = styled.button`
  width: 30px;
  height: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background-color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export default function CircleButton({
  className,
  onClick,
  Icon,
}: {
  className?: string;
  onClick: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <Circle onClick={onClick} className={className}>
      <Icon />
    </Circle>
  );
}
