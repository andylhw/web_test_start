import React from 'react'


const style_title = {
    display: 'flex',
    color: 'white',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    flexDirection:'column',
    backgroundColor: 'black',
    opacity: 0.8,
}

function HobbyPage() {
    return (
        <div>
        <ul>
        <form style={style_title}>
        <h1>취미</h1>
        <h2>
        <ul>
            <li>자전거타기 (따릉이 재밌더라)</li>    
            <li>여행다니기 (해외가고싶다)</li>
            <li>친구랑 맛집탐방</li>
            <li>게임하기</li>
        </ul>
        </h2>
        </form>       
        </ul>
        </div>
    )
}

export default HobbyPage
