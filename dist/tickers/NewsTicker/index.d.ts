import * as React from 'react';
interface NewsTickerProps {
    id: number;
    title: string;
    url: string;
    meta: string;
    icon?: string;
    iconAlt?: string;
}
declare const NewsTicker: React.FunctionComponent<NewsTickerProps>;
export default NewsTicker;
