import style from 'styled-components';

const Button = style.button`

    border : 1px solid white;
    background-color: #2DCB74;
    color: white;
    border-radius: 4px;
    padding:8px 25px;
    margin:20px 0px ;
    font-weight: normal;
    transition: all 0.1s ease-in-out;


    &:hover{
        transform: scale(0.9);
        background-color: #20df76;
    }

`

export default Button;



