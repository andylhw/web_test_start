import React from 'react'

const style_title = {
    display: 'flex',
    color: 'white',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    flexDirection:'column',
    border: '1px solid white',
}

const style2 = {
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
    <form style={style2}>
        <h2>testing</h2>
        
    </form>
    <form>
        테스트2
    </form>
    </div>
    )
}

export default LandingPage
