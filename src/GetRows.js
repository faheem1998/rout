import React from 'react';

const GetRows = (props) =>{

    return (
        <div>
            <table width="100%" border="1" class="table ">
                <tr>
                    <td width="25%">{props.plr.id}</td>
                    <td width="25%">{props.plr.playername} </td>
                    <td width="25%">{props.plr.jersey}</td>
                    <td width="25%">{props.plr.country}</td>
                </tr>
            </table>
        </div>
    );
}

export default GetRows;