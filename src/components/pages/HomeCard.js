import React from 'react';
import {Image, Placeholder, Segment} from "semantic-ui-react";

const HomeCard = props => {

    const [loaded, setLoaded] = React.useState(false);
    const [dave, setDave] = React.useState(false);

    if (!loaded){
        setTimeout(() => {
            setLoaded(true);
        }, props.index * 500);

        return <Segment raised>
            <Placeholder>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line length='medium' />
                    <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
            </Placeholder>
        </Segment>
    }

    if (props.index === 1 || props.index === 4) {
        setTimeout(() => {
            setDave(true);
        }, 9000);
    }

    if (dave) {
        return <Image src="/dave.jpg" fluid />
    }

    return <Segment raised>
        <Image src={"/"+props.index+".png"} width={500} />
    </Segment>;
}

export default HomeCard;