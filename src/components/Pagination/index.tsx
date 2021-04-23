import { memo } from 'react';

import './style.scss';
import Button from './components/Button';
import { OptionsItem } from '../../types';

interface Props {
  items: OptionsItem[];
}

const Paginator = (props: Props) => {
  const { items } = props;
  return (
    <ul className="Paginator">
      {items.map(({ type, page, selected, icon, onClick, disabled }, index) => (
          <li key={index}>
            <Button
              onClick={onClick}
              active={selected}
              ellipsis={type.includes('ellipsis')}
              disabled={disabled}
            >
              {type === 'page' && page}
              {type.includes('ellipsis') && '...'}
              {icon && icon}
            </Button>
          </li>
        ))}
    </ul>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Paginator, areEqual);
