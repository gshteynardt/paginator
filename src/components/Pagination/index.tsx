import { memo } from 'react';

import './style.scss';
import Button from './components/Button';
import { Arrow } from '../../assets/icons';

interface Props {
  items: (string | number)[];
  page: number;
  onClick: (value: number) => void;
  onBack: () => void;
  onNext: () => void;
}

const Paginator = (props: Props) => {
  const { items, page, onClick, onBack, onNext } = props;

  return (
    <ul className="Paginator">
      <Button onClick={onBack}><Arrow /></Button>
      {items.map((item, index) => {
        const handleClick = () => typeof item === 'number'
          ? onClick(item)
          : undefined;

        return (
          <li key={index}>
            <Button
              active={page === item}
              ellipsis={typeof item !== 'number'}
              onClick={handleClick}
            >
              {typeof item === 'number' ? item : '...'}
            </Button>
          </li>
        );
      })}
      <Button onClick={onNext}>
        <Arrow className="Paginator__Arrow Paginator__Arrow_next" />
      </Button>
    </ul>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Paginator, areEqual);
