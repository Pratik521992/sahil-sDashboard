import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        maxWidth: 200,
        margin: 16,
        padding: 16,
    }
}

export default props => {

    return (
        <>
            <Card style={styles.card}>
                <CardContent >
                    <Typography component="h5" variant="h5">
                        {props.data1}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.data2}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}