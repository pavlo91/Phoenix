import React from 'react';
import 'jsvectormap';
import 'assets/hyper/scripts/russia';
import useVectorMap from './useVectorMap';

type RussiaVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const RussiaVectorMap = ({ width, height, options }: RussiaVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'russia');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default RussiaVectorMap;
