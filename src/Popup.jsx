import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const Popups = ({ number }) => {
    <React.Fragment>
        <Popup
            trigger={<Icon circular name='heart' />}
            content={number}
            size='large'
        />
    </React.Fragment>
}

export default Popups;