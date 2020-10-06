import React from 'react'

const style_title = {
    display: 'flex',
    color: 'white',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    flexDirection:'column',
    border: '1px solid white',
}

const style_content = {
    display: 'flex',
    color: 'white',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    flexDirection:'column',
}
function LandingPage() {
    return (
        
    <div>
    <form style={style_title}>
    <h1>이화원의 메인페이지</h1></form>
    <form style={style_content}>
        <h2>메인페이지입니다.</h2>
        
    </form>
    <form>
        <h1>테스트2</h1>
    </form>
    </div>
    )
}

export default LandingPage
