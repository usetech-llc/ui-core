/// <reference types="react" />
declare const Chart: {
    Doughnut: import("react").MemoExoticComponent<({ className, size, values }: import("./types").DoughnutProps) => import("react").ReactElement<import("./types").DoughnutProps, string | import("react").JSXElementConstructor<any>>>;
    HorizBar: import("react").MemoExoticComponent<({ aspectRatio, className, max, showLabels, values }: import("./types").HorizBarProps) => import("react").ReactElement<import("./types").HorizBarProps, string | import("react").JSXElementConstructor<any>> | null>;
    Line: import("react").MemoExoticComponent<({ className, colors, labels, legends, values }: import("./types").LineProps) => import("react").ReactElement<import("./types").LineProps, string | import("react").JSXElementConstructor<any>> | null>;
};
export default Chart;
