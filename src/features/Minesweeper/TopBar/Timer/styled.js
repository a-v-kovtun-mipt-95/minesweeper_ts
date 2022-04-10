import styled from 'styled-components';
import timer from './../../icons/timer.png'

export const TimerWrapper = styled.div`
    padding: 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.topBarBackground};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TimerIcon = styled.div`
	background-image: url(${timer});
    margin-right: 6px;
    height: 24px;
    width: 24px;
    background-size: cover;
    background-position: center;
`;