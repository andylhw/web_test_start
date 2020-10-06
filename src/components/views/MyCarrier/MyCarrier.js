//기본적인 틀을 만들땐 rfce
import React from 'react'
const style_title = {
    display: 'flex',
    color: 'white',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    flexDirection:'column', 
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
        <div style={style_title}>
            <form>
                <ul><h1>carrier page</h1></ul>
            </form>
            <ul>   
                <h2>뭘 했는가(2010~)</h2>
                <h3>
                <ul>
                    <li>
                        단국대학교사범대학부속중학교 졸업 (2012.02)
                    </li>
                    <li>
                        중앙대학교사범대학부속고등학교 졸업 (2015.02)
                    </li>
                    <li>
                        숭실대학교 융합특성화자유전공학부 입학 (2017.03)
                    </li>
                    <li>
                        입대 ㅠㅠ(2018.02)
                    </li>
                </ul>

                </h3>
            </ul>
        </div>
    )
}

export default MyCarrier

