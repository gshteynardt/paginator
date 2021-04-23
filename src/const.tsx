import { Arrow } from './assets/icons';
import { ArrowLast } from './assets/icons';

const prevIcon = <Arrow />;
const nextIcon = <Arrow className="Paginator__Arrow Paginator__Arrow_rotate" />;
const firstIcon = <ArrowLast className="Paginator__Arrow Paginator__Arrow_rotate" />;
const lastIcon = <ArrowLast />;

export const iconsMap = {
  first: firstIcon,
  previous: prevIcon,
  next: nextIcon,
  last: lastIcon,
};
