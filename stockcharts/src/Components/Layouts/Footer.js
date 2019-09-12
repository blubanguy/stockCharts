import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";

export default ({ muscles, category, onSelect }) => {
    const index = category
    ? muscles.findIndex(group => group===category) + 1
    : 0;

    const onIndexSelect = (e, index) => 
        onSelect(index === 0 ? '' : muscles[index - 1])
    
    return(
        <Paper>
            <Tabs
                onChange={onIndexSelect}
                value={index}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                {muscles.map(group =>
                    <Tab key={group} label={group} />
                )}

            </Tabs>
        </Paper>
    );
}
