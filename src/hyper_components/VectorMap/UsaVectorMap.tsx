import React from 'react';
import 'jsvectormap';
import 'assets/hyper/scripts/us-merc-en';
import useVectorMap from './useVectorMap';

type UsaVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const UsaVectorMap = ({ width, height, options }: UsaVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'us_merc_en');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default UsaVectorMap;
