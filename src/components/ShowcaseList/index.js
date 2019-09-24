import React from 'react';
import ShowcaseItem from '../ShowcaseItem';
import BarChart from '../BarChart';
import ScatterPlot from '../ScatterPlot';
import * as S from './styles';

const ShowcaseList = () => (
    <S.Wrapper>
        <ShowcaseItem
            description={[
                'This is a fictitious scatter plot representing coffee consumption vs hours of sleep.',
                'At some point, I would like to actually track these data points and see if there is indeed a negative correlation.'
            ]}
            title="Scatter Plot"
            thumbnail={<ScatterPlot />}
        />
        <ShowcaseItem
            description={[
                'Here is a sample of my recent gym session durations in minutes.',
                'This bar chart was built with raw SVGs and only using the scale functions from the D3 library.'
            ]}
            title="Gym Session Duration"
            thumbnail={<BarChart data={[58, 67, 58, 63, 63, 62, 52, 53]} xAxisLabel="Index" yAxisLabel="Minutes" />}
        />
    </S.Wrapper>
);

export default ShowcaseList;
