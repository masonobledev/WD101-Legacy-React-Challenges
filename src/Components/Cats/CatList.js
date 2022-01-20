import React, { Component } from 'react';
import { render } from 'react-dom';
import CatIndex from './CatIndex';
 
const CatList = (props) => {
 return (
   <ul>
     {props.breeds.map((cat, index) => <li key={index}>{cat}</li> )}
   </ul>
 )
};
 
export default CatList;