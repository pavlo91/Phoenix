import { getIntegerArrayBetween } from 'helpers/utils';
import { useEffect, useState } from 'react';

interface UsePagination {
  currentPageNo: number;
  totalPage: number;
  maxPaginationButtonCount: number;
}

const usePagination = ({
  currentPageNo,
  totalPage,
  maxPaginationButtonCount
}: UsePagination) => {
  const [visiblePaginationItems, setVisiblePaginationItems] = useState<
    number[]
  >([]);
  const [hasNextEllipsis, setHasNextEllipsis] = useState(false);
  const [hasPrevEllipsis, setHasPrevEllipsis] = useState(false);

  useEffect(() => {
    if (totalPage <= maxPaginationButtonCount) {
      setVisiblePaginationItems(
        Array.from(Array(totalPage).keys()).map((_, i) => i + 1)
      );
    } else {
      const maxButtonEachSide = Math.floor(maxPaginationButtonCount / 2);

      const start =
        currentPageNo <= maxButtonEachSide
          ? 1
          : currentPageNo - maxButtonEachSide;

      const end =
        start === 1
          ? maxPaginationButtonCount
          : currentPageNo + maxButtonEachSide >= totalPage
          ? totalPage
          : currentPageNo + maxButtonEachSide;

      if (start > 1 && start !== 2) {
        setHasPrevEllipsis(true);
      } else {
        setHasPrevEllipsis(false);
      }

      if (end >= totalPage) {
        setHasNextEllipsis(false);
      } else {
        setHasNextEllipsis(true);
      }
      setVisiblePaginationItems(getIntegerArrayBetween(start, end));
    }
  }, [currentPageNo, totalPage, maxPaginationButtonCount]);

  return { visiblePaginationItems, hasNextEllipsis, hasPrevEllipsis };
};

export default usePagination;
