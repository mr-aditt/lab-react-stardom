import React from 'react';

let CONTENT = (props)=>{
    const {data, deleteRecord} = props;
    return(
        <>
            <tr id={data.id}>
                <td>
                    <img src={data.pictureUrl} alt={props.data.name} />
                </td>
                <td className="prostar-name">
                    {data.name}
                </td>
                <td className="prostar-popularity">
                    {data.popularity}
                </td>
                <td>
                    <button className="deleteBtn" id={data.id} onClick={deleteRecord}>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default CONTENT;