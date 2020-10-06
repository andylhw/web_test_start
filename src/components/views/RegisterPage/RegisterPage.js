import React from 'react'
const style = {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid black',
}
function RegisterPage() {
    return (
    <div style={style}>
        <h2>Link of my favorite websites</h2>
            <ul>
                <li><a href='https://github.com/andylhw'><h3>Github</h3></a> </li>
                <li><a href='https://inflearn.com'><h3>inflearn: way to learn Node.js</h3></a></li>
                <li><a href='https://programmers.co.kr'><h3>Programmers: way to test skills</h3></a></li>
                <li><a href='https://www.youtube.com'><h3>Youtube</h3></a></li>
                <li><a href='https://myclass.ssu.ac.kr'><h3>SSU MyClass</h3></a></li>
            </ul>
        </div>
    )
}

export default RegisterPage
