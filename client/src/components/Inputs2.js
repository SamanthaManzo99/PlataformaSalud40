import React from 'react'
import "../pages/Styles.css";

class Inputs2 extends React.Component {
    render(){
        const {label,value} = this.props;

        return(
            <div className='input-container'>
                <label className='label'>{label}</label>
                <input
                    type='text'
                    value={value}
                    readOnly
                    className='input-2'
                />
            </div>
        )
    }
}

export default Inputs2