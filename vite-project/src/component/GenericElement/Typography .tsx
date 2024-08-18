import React from 'react';

type TypographyProps = {
  onClick?: () => void;
  as: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Typography: React.FC<TypographyProps> = ({ as: Tag, children, onClick, className = '', style = {}}) => {
  return (
    <Tag onClick={onClick} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
