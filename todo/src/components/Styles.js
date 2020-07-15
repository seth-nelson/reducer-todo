import styled, { css } from 'styled-components';


//Global Styles----------------------------------------


export const StyledAppContainer = styled.div`
    text-align: center;
`;

export const StyledHeader = styled.div`
    font-size: 2em;
    padding: 10px;
`;

export const MainBody = styled.div`
    width: 40%;
    margin: 0 auto;
    align-content: center;
`;

export const TasksContainer = styled.div`
    padding-top: 80px;
`;

export const StyledDate = styled.span`
    font-size: .6em;
    font-style: italic;
`;

export const InputTaskField = styled.input`
    width: 180px;
    height: 40px;
    margin: 10px;
    color: goldenrod;
    border-bottom: 2px solid #13889c;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #06172b;
`;

export const AddTaskBtn = styled.button`
    background-color: #0a2747;
    color: #63a9f8;
    font-size: .9em;
    font-style: oblique;
    border: 2px solid #0f3969;
    border-radius: 8px;
    width: 150px;
    height: 50px;
    margin: 10px;
`;

export const ClearTaskBtn = styled.button`
    background-color: #0a2747;
    color: tomato;
    font-size: .9em;
    font-style: oblique;
    border: 2px solid #0f3969;
    border-radius: 8px;
    width: 150px;
    height: 50px;
`;

export const TaskContainer = styled.div`
    padding-bottom: 20px;
    background-color: #069bb6;
    color: #06172b;
    height: 50px;
    width: 300px;
    margin: 2.5px;
    border-radius: 5px;
`;