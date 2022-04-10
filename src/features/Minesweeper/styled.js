import styled, { css } from 'styled-components';
import { EXPERT, INTERMEDIATE } from './consts';

export const Container = styled.div`
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 446px;
    padding: 20px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.mainLight};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ difficultyLevel }) => difficultyLevel === INTERMEDIATE && css`
        width: 1330px;
    `};
    ${({ difficultyLevel }) => difficultyLevel === EXPERT && css`
        width: 2840px;
    `};
`;