import * as React from 'react';
interface TickerListProps {
    name?: string;
    slideSpeed?: number;
    visibleItems?: number;
    isNewsTicker?: boolean;
}
declare const TickerList: React.FunctionComponent<TickerListProps>;
export default TickerList;
