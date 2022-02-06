/**
 * @component FinancialTicker
 */
import * as React from "react";
interface IFinancialTrackerProps {
    id: number;
    symbol: string;
    change: boolean;
    identifier?: string;
    lastPrice: string;
    currentPrice: string;
    percentage: string;
}
declare const FinancialTicker: React.FunctionComponent<IFinancialTrackerProps>;
export default FinancialTicker;
