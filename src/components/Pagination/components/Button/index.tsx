import { memo, ReactNode, SyntheticEvent } from 'react';
import cn from 'classnames';

interface Props {
  active?: boolean;
  ellipsis?: boolean;
  onClick?: (e?: SyntheticEvent) => void;
  children: ReactNode;
}

const Button = (props: Props) => {
  const { active, ellipsis, children, onClick } = props;
  return (
    <button className={cn(
      'Paginator__Item',
      { 'Paginator__Item_ellipsis': ellipsis },
      { 'Paginator__Item_active': active },
    )}
    onClick={onClick}
    >
      {children}
    </button>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Button, areEqual);
