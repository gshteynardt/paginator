import { SyntheticEvent } from 'react';

import { iconsMap } from '../const';

interface Props {
  page?: number;
  defaultPage?: number;
  count: number;
  boundaryCount: number;
  siblingCount: number;
  onClick: (value: number) => void;
}

export default (props: Props) => {
  const {
    count,
    boundaryCount,
    siblingCount,
    page = 1,
    onClick,
  } = props;
  
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  );

  const items = [
    ...['first'],
    ...['previous'],
    ...startPages,

    // Start ellipsis
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

    ...endPages,
    ...['next'],
    ...['last'],
  ];

  // Map the button type to its page number
  const buttonPage = (type: string) => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return 1;
    }
  };

  const itemList = items.map(item => {
    return typeof item === 'number'
      ? {
        onClick: (e?: SyntheticEvent) => {
          onClick(item);
        },
        type: 'page',
        page: item,
        selected: item === page,
      }
      : {
        onClick: (e?: SyntheticEvent) => {
          onClick(buttonPage(item));
        },
        type: item,
        page: buttonPage(item),
        selected: false,
        icon: (
          item === 'first'
          || item === 'previous'
          || item === 'next'
          || item === 'last'
          )
        ? iconsMap[item]
        : null,
        disabled: item.includes('ellipsis')
        || ((item === 'previous' || item === 'first') && page <= 1)
        || ((item === 'next'|| item === 'last') && page >= count),
      };
  });

  return itemList;
};
