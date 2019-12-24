import React, { useState } from 'react';

export default function table(props){

    

    return(
        <table>
<thead>
<tr>

<th> letter </th>
<th> code </th>
<th> frequency </th>
</tr>
</thead>
<tbody>
{
 props.data.map(
dat =>
<tr key = {dat.letter}>
<td>{dat.letter}</td>
<td>{dat.code}</td>
<td>{dat.frequency}</td>

</tr>
)
}
</tbody>

</table>
    )
}