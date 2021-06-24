import React from 'react';
import './ErrorModal.css';
import Button from './Button';
import Card from '../Card/Card';

export default function ErrorModal(props) {
    return (
            <div className = 'modal' style = {props.isValid === false  ? {display:'unset'}:{display:'none'}}>
            <Card className = 'my-modal'>
                <div className = 'modal-header'>
                    <h2>Input Invalid</h2>
                </div>
                <div className = 'modal-msg'>
                    <p>Inputs must be valid or not Empty</p>
                 </div>
                <div className = 'modal-btn'>
                    <Button onClick = {props.onConfirm}>Okay</Button>
                </div>
            </Card>
            </div>

    )
}
