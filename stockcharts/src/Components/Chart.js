import React from 'react';
import { Paper } from '@material-ui/core';


export default props => {
    return (
        <Paper style={{display: 'flex',
         justifyContent: 'center',
         padding: '5px 10px'}}
         >
            <img 
            src='https://d.stockcharts.com/img/chart-carousel/carousel-chart-04.png'
            alt='stock chart'
            style={{
                width: '100%',
                maxHeight: '88vh',
                minHeight: '200px'
            }}/>
        </Paper>
    );
}