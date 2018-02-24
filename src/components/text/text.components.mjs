import React from 'react';
import styled from 'react-emotion';



const H1 = styled('h1')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor,

}))

const H2 = styled('h2')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor,

}))

const withTernary = ({ condA, condB}) => (
    (!condA) ? 2.25 : `${defaultFont}px`
)

const H3 = styled('h3')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor,

}))


const H4 = styled('h4')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor
}))


const H5 = styled('h5')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor
}))

const H6 = styled('h6')(props => ({
    fontSize: props.theme.fontSize,
    color: props.theme.textColor,
}))


const RenderH1 = ({theme, data}) => <H1>{data}</H1>;
const RenderH2 = ({theme, data}) => <H1>{data}</H1>;
const RenderH3 = ({theme, data}) => <H1>{data}</H1>;
const RenderH4 = ({theme, data}) => <H1>{data}</H1>;
const RenderH5 = ({theme, data}) => <H1>{data}</H1>;
const RenderH6 = ({theme, data}) => <H1>{data}</H1>;

export {
    RenderH1,
    RenderH2,
    RenderH3,
    RenderH4,
    RenderH5,
    RenderH6,
}