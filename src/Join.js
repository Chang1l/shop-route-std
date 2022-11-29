import axios from 'axios'
import $ from 'jquery'

export default function Join(){
    return(
        <div>
          아이디 : <input type = "text" id = "userId" name = "userId" placeholder="user id"/><br/>
   비번: <input type = "text" id= "password" name = "password" placeholder="password"/><br/>
   이름: <input type = "text"  id = "name" name = "name" placeholder="name"/><br/>
   권한: <input type = "text" id = "auth" name = "auth"/><br/>
    <button onClick={()=>{
            const obj = {
                url : 'http://localhost:8090/member/join',
                method:'POST',
                headres:{
                    'Acceppt' : 'applicaiton/json',
                    'Content-Type' : 'application/json; charset=UTF-8'
                },
                data:{
                    'userId':$('#userId').val(),
                    'password':$('#password').val(),
                    'name':$('#name').val(),
                    'auth':$('#auth').val(),
                }
    };
    if($('#userId').val() !='' && $('#password').val() != '' && $('#name').val() != '' && $('#auth').val() != ''){
        axios(obj).then(res =>{
            console.log(res);
            if(res.data = 'ok'){
                alert('회원가입이 되었습니다');
                $('#userId').val('')
                $('#password').val('')
                $('#name').val('')
                $('#auth').val('')
            }
        })
    }else{
        alert('모두 입력해주세용');
    }

    }}>확인</button>
   
   </div>
    )
}