import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

list-style: none;
margin: 0;
padding: 0;
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: center;

width: 300px;
height: 30px;

padding: 5px 5px 5px 10px;
margin-bottom: 10px;

background-color:rgba(255, 255, 255, 0.3);
border-radius: 5px;
box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);
`
export const ContactName = styled.span`
margin-right: 7px;
font-weight: bold;
`

export const ButtonDelete = styled.button`
display: flex;
align-items: center;
justify-content: center;

border: none;
border-radius: 5px;
background-color: rgba(222, 184, 135, 0.5);
padding: 4px;
margin-left: auto;
`

export const Loader = styled.span`
display: inline-flex;
margin-left: 10px;
border: 7px solid rgba(255, 255, 255, 0.3);
border-top: 7px solid rgba(222, 184, 135, 0.5);
border-radius: 50%;
width: 10px;
height: 10px;
animation: spin 2s linear infinite;
box-shadow: 0px 0px 15px rgba(222, 184, 135, 0.5);

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    50% {
        background-color: rgba(255, 255, 255, 0.3);
    }
    100% {
        transform: rotate(360deg);
    }
}
`