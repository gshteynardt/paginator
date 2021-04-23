import cn from 'classnames';

import { Arrow } from './assets/icons';
import { ArrowLast } from './assets/icons';

const prevIcon = <Arrow className="Paginator__Arrow Paginator__Arrow_back" />;
const lastIcon = <ArrowLast className="Paginator__Arrow Paginator__Arrow_last" />;
const nextIcon = <Arrow
  className={
    cn(
      'Paginator__Arrow',
      'Paginator__Arrow_rotate',
      'Paginator__Arrow_back',
    )
  }
/>;
const firstIcon = <ArrowLast
  className={
    cn(
      'Paginator__Arrow',
      'Paginator__Arrow_rotate',
      'Paginator__Arrow_last',
    )
  }
/>;

export const iconsMap = {
  first: firstIcon,
  previous: prevIcon,
  next: nextIcon,
  last: lastIcon,
};
