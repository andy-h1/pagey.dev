import React from 'react';
import pagey from './assets/pagey.jpg';
import * as S from './styles';

const PageHome = () => {
    return (
        <S.Wrapper>
            <S.Image src={pagey} alt="pagey" />

            <S.Text>
                Yo, my name is Dan, I&apos;m a JavaScript Developer and I enjoy building apps to solve problems.
            </S.Text>

            <S.Text>
                I have always appreciated a good data vizualisation and so I&apos;m learning to use D3.js within React
                apps. Hopefully, I can build something cool and interactive. Until then, this is my playground.
            </S.Text>
        </S.Wrapper>
    );
};

export default PageHome;