//기본적인 틀을 만들땐 rfce
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
}


function MyCarrier() {
    return (
        <div>
        <ul>
            <form style={style_title}>
                <h1>이화원의 경력페이지</h1>
            </form>
            
            <form style={style_title}>
                <h2>뭘 했는가(2010~)</h2>
                <h3>
                <ul>
                    <li>
                        단국대학교사범대학부속중학교 (2010.01~2012.02)
                    </li>
                    <li>
                        중앙대학교사범대학부속고등학교 졸업 (2012.03~2015.02)
                    </li>
                    <li>
                        숭실대학교 융합특성화자유전공학부 입학 (2017.03~)
                    </li>
                    <li>
                        미2사단 2전투항공여단 정보통신병 (2018.02~2019.10)
                    </li>
                </ul>
                </h3>
                <h2>무엇을 배우고 있는가</h2><h3>
                <ul>
                    <li>C language</li>
                    <li>C++ language</li>
                    <li>Node.js</li>
                    <li>Back-End Programming</li>    
                    <li>Algorithm</li>
                </ul>
                </h3>
            </form>
        </ul>
        </div>
    )
}

export default MyCarrier

