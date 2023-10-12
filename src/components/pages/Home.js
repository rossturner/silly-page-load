import React from 'react';
import {connect} from 'react-redux';
import {Grid, Header, Image, Progress, Segment} from "semantic-ui-react";
import HomeCard from "./HomeCard";

const Home = props => {

    const [step, setStep] = React.useState(0);
    const [progress, setProgress] = React.useState(0);


    if (step === 0) {
        setTimeout(() => {
            setStep(1);
        }, 3200);

        return <Segment loading>
            <Header>
                Wait for it...
            </Header>
        </Segment>
    }

    if (step === 1) {
        setTimeout(() => {
            setStep(2);
        }, 3000);

        return <Image src='/gdesign.png' fluid />
    }

    if (step === 2) {
        setTimeout(() => {
            setProgress(progress + 1);
        }, 30);

        if (progress >= 100) {
            setStep(3);
        }

        return <Segment>
            <Progress percent={progress} indicating />
        </Segment>;
    }

    if (step === 3) {
        setTimeout(() => {
            setStep(4);
        }, 1000);

        return <Segment>
            <Header>
                <h1>Low Effort Admin Dashboard</h1>
            </Header>
        </Segment>;
    }

    if (step === 4) {
        setTimeout(() => {
            setStep(5);
        }, 23000);

        return <Segment>
            <Header>
                <h1>Low Effort Admin Dashboard</h1>
            </Header>

            <Grid columns={2}>
                <Grid.Column>
                    <HomeCard index={1} />
                    <HomeCard index={2} />
                    <HomeCard index={3} />
                </Grid.Column>
                <Grid.Column>
                    <HomeCard index={4} />
                    <HomeCard index={5} />
                    <HomeCard index={6} />
                </Grid.Column>
            </Grid>

        </Segment>;
    }

    return <React.Fragment>
        <iframe src="https://www.youtube.com/embed/oHg5SJYRHA0?si=we53xlXoO4P8UDJh&autoplay=1"
                width="1460" height="915"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    </React.Fragment>;
};

export default connect()(Home);
