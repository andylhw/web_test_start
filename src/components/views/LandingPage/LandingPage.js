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

const style_content = {
    display: 'flex',
    color: 'white',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    flexDirection:'column',
    backgroundColor: 'black',
    opacity: 0.8,
}
function LandingPage() {
    return (
        
    <div>
    <ul>
    <form style={style_title}>
    <h1>이화원의 메인페이지</h1></form>
    <form style={style_content}>
        <h2>메인페이지입니다.</h2>
        
    </form>
    <form>
        <h1>테스트2</h1>
    </form>
    </ul>
    </div>
    )
}

export default LandingPage
