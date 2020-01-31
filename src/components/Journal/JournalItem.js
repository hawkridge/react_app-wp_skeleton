import React from 'react'

const JournalItem = (props, ...rest) => {
    const { name, id } = props;
    return (
        <div>
            <span style={{ marginRight: '20px' }}> { id } </span>
            <span> { name } </span>
        </div>
    )
}

export default JournalItem