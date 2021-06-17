import React from 'react'

import { SwitchButton } from '../../components/ToggleSwitch'

const index = () => {
    const [isChecked, setChecked] = React.useState(false)

    const handleSwitchChecked = () => {
        setChecked((prevState) => !prevState)
    }

    console.log('isChecked', isChecked)

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1>{isChecked ? 'true' : 'false'}</h1>
            <SwitchButton onClick={handleSwitchChecked} />
        </div>
    )
}

export default index
