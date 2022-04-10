import styled, { css } from 'styled-components';
import { EXPERT, INTERMEDIATE } from '../consts';

export const GridWrapper = styled.div`
    display: grid;
	grid-template-columns: repeat(10, 1fr);
    padding: 1px;
    border-radius: 1px;
    border-top: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-right: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.darkBorder};

    ${({ difficultyLevel }) => difficultyLevel === INTERMEDIATE && css`
        grid-template-columns: repeat(40, 1fr);
    `};
    ${({ difficultyLevel }) => difficultyLevel === EXPERT && css`
        grid-template-columns: repeat(100, 1fr);
    `};
`;