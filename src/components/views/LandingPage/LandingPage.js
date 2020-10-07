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
        <h2>
            숭실대학교 소프트웨어학부 2학년에 재학중인 이화원입니다. 
            <br></br>
            많은것을 배우고 싶고, 현재는 웹 프로그래밍과 깃허브로 협업하는 법을 배우고 있습니다.
        </h2>
        
    </form>
    </ul>
    </div>
    )
}

export default LandingPage
