/*
 * @Author: your name
 * @Date: 2020-06-17 17:06:16
 * @LastEditTime: 2020-06-19 10:30:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /simple_book_web/src/pages/nomatch/index.js
 */ 
import React from 'react'
import './404.css';
import styled from "styled-components";
const NotFound = styled.div `
    width: 100%;
    height:1200px;
    position:relative;
    display: grid;
`

export default function NoFound() {
    return (
        <NotFound >
        <div className="WaterBallWrapper">
            <div className="WaterBallWave">
            </div>
        </div>
        </NotFound>
    )

}
