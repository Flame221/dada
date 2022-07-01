import React from 'react';
import PropTypes from 'prop-types'

const nameCase = name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

function MyFunction(props) {
    props.func();
    return <h2>Hello, {nameCase(props.name)}!</h2>
}

MyFunction.propTypes = {
    name: PropTypes.string.isRequired,
}
//callback

//function reduce to make total
//make button to remove product
// .*make for opt porduct with min  10 and solve the problem with input the number

//immutability of data


export default MyFunction;