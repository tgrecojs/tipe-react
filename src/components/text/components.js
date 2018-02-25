import React from 'react';
import styled from 'react-emotion';

const PText = styled('p')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor
}))


const H1 = styled('h1')(props => ({
    textAlign: 'center',
    fontSize: props.theme.fontSize * 2.5,
    color: props.theme.textColor,
}))

const H2 = styled('h2')(props => ({
    textAlign: 'center',
    fontSize: props.theme.fontSize * 2.25,
    color: props.theme.textColor,

}))


const H3 = styled('h3')(props => ({
    textAlign: 'center',
    fontSize: props.theme.fontSize * 2.125,
    color: props.theme.textColor,
}))


const H4 = styled('h4')(props => ({
    fontSize: props.theme.fontSize * 2,
    color: props.theme.textColor
}))


const H5 = styled('h5')(props => ({
    fontSize: props.theme.fontSize * 1.75,
    color: props.theme.textColor
}))

const H6 = styled('h6')(props => ({
    fontSize: props.theme.fontSize * 1.5,
    color: props.theme.textColor,
}))

/** this seems super super redundant but i'm just not seing the solution clearly */
const RenderH1 = ({theme, data}) => <H1 theme={theme}>{data}</H1>;
const RenderH2 = ({theme, data}) => <H2 theme={theme}>{data}</H2>;
const RenderH3 = ({theme, data}) => <H3 theme={theme}>{data}</H3>;
const RenderH4 = ({theme, data}) => <H4 theme={theme}>{data}</H4>;
const RenderH5 = ({theme, data}) => <H5 theme={theme}>{data}</H5>;
const RenderH6 = ({theme, data}) => <H6 theme={theme}>{data}</H6>;

const RenderPText = ({theme, data}) => <PText theme={theme}>{data}</PText>

export {
    RenderH1 as H1,
    RenderH2 as H2,
    RenderH3 as H3,
    RenderH4 as H4,
    RenderH5 as H5,
    RenderH6 as H6,
    RenderPText as PText
}