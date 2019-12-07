import React from "react";
import {DialButton} from "../Buttons";

const DialPad = ({ numberFn, dotFn, rows = [[1,2,3],[4,5,6],[7,8,9]] }) =>
  <div className='d-flex flex-column'>
    {
      rows.map(
        row =>
          <div className='btn-group'>
            {
              row.map(number =>
                <DialButton
                  caption={number}
                  onClick={()=> numberFn(number)}
                />)
            }
          </div>
      )
    }
    <div className='btn-group'>
      <DialButton caption={0} onClick={()=> numberFn(0)}/>
      <DialButton caption={'.'} onClick={()=> dotFn()}/>
    </div>
  </div>;


export default DialPad;