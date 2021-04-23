import { HTMLAttributes, memo, ReactNode, SyntheticEvent } from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  ellipsis?: boolean;
  disabled?: boolean;
  onClick?: (e?: SyntheticEvent) => void;
  children: ReactNode;
}

const Button = (props: Props) => {
  const { active, ellipsis, children, onClick, ...rest } = props;
  return (
    <button 
    {...rest}
    className={cn(
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
