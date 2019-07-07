import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 600px;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: 'Merriweather', serif;
`;

export const SubTitle = styled.h2`
    font-family: 'Merriweather', serif;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    margin: 2rem 0 0;
`;

export const FlexWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0;
`;

export const CompanyLink = styled.a`
    cursor: pointer;
`;

export const Logo = styled.img`
    display: block;
    margin: 0 auto;
    height: 50px;
    width: 150px;
`;

export const JobTitle = styled.h5`
    font-weight: 600;
    font-size: 1.125rem;
    margin: 0;
`;

export const ItalicSpan = styled.span`
    font-style: italic;
`;