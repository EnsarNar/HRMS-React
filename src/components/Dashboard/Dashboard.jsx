import React from 'react';
import Resumes from "../../layout/Resumes.jsx";
import { Grid} from 'semantic-ui-react'
import { Route } from "react-router-dom"



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route/>
                    <Resumes/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
