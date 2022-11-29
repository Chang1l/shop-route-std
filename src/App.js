import './App.css';
import {Button,Container, Navbar,Nav} from 'react-bootstrap';
import {Items} from './Items';
import {Details} from './Details';
import Main from './Main';
import {Routes, Route,Link ,useNavigate,Outlet}from 'react-router-dom';
import ComLife from './ComLife';
import React, {useEffect, useState } from 'react';
import Join from './Join';
import ax from 'axios';

function App() {
  let navigate=useNavigate();
  
  let arr=[1,2,3,4,5,6,7,8];
  let mstyle={
    position:'absolute',width:'50px',
    height: '50px', top:'10px', right:'20px',
    background:'red', color:'white',
    borderRadius:'8px',
    fontSize:'20pt'};

  return (
    <div className="App">
     {/* 메뉴바 */}
     <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {/* <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/detail'>Detail</Nav.Link> */}
             <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
             <Nav.Link onClick={()=>navigate('/cart')}>Cart</Nav.Link>
             <Nav.Link onClick={()=>navigate('/test')}>Test</Nav.Link>
             <Nav.Link onClick={()=>navigate('/about/member')}>회원정보</Nav.Link>
             <Nav.Link onClick={()=>navigate('/mjoin')}>회원가입</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>

    <Routes>
                <Route path="/" element={
                                  <>
                                    <div className='main-bg'></div>
                    <div className='container'>
                    <div className='row'>
                      {/* key속성 권장 */}
                      {/* arr.length 길이만큼  */}
                      {
                          arr.map((v,i)=>{
                                if(v>3) v=0;
                                return (<Items key={i} ord={v} arrlen={3}/>)
                          })
                      }
                      </div>
                    </div>
                      </>

                }/>
                <Route path="/detail/:pid/:ln" element={<Details/>}/>
                {/* 바인딩변수를 element로 전달 해당 컴포넌트 */}
                <Route path="/cart" element={<div>장바구니 페이지 임</div>}/>
              

                 {/* 중첩(nested) 라우터 표현 */}
                <Route path="/about" element={<About/>}>
                  <Route path="member" element={<Member/>}/>
                  <Route path="loc" element={<Loc/>}/>
                </Route>

                <Route path="/mjoin" element={<Join/>}/>
                <Route path="/test" element={<ComLife/>}/>
                {/* 라우터 6버전 미만 */}
                {/* <Route path="/test" component={ComLife}/> */}

                <Route path="*" element={<div>에러코드: 404<br/>없는 페이지입니다.<br/></div>}/>
            </Routes>
            {/* <Button> 버튼</Button> */}
              
            <p className='blue'>
               <br/>⠀⠀
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ⢀⣴⣶⣶⣶⣄⠀⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣄⣾⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣻⣿⣿⣿⣿⣿⣿⣿⣶⣶⡄⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⠟⠁⠀⠀⠉⠉⠛⠛⠛⢻⡏⠁⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⠀⠀⢰⠏⠀⠀⢰⣷⠀⠀⣤⡄⠀⠀⢹⡄⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⣴⠶⣦⡉⠁⠀⠀⠀⣷⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⠀⢸⡇⠀⠀⢀⡀⢷⣤⣼⠇⢠⡀⠀⠀⣿⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⠀⠀⣰⠞⠃⠀⠀⣨⡿⢶⣤⣤⡶⠏⠀⠀⢀⡟⠀⠀⠀⠀<br/>⠀⠀
⠀⠀⢀⡾⠁⠀⠀⠀⣰⠏⠀⠀⣿⠀⠀⠀⠀⠀⠈⠻⡄⠀⠀⠀<br/>⠀⠀
⠀⠀⡾⠁⠀⠀⠀⣰⠟⠀⠀⢀⡟⠀⠀⠀⠀⣀⠀⠀⢻⠀⠀⠀<br/>⠀⠀
⠀⢸⡇⠀⠀⠲⠛⠁⠀⠀⢀⡾⠁⠀⠀⠀⠀⢸⡆⠀⢸⡇⠀⠀<br/>⠀⠀
⠀⠘⣇⠀⠀⠀⠀⠀⠀⣠⡞⠁⠀⠀⠀⠀⠀⢸⡇⠀⢸⡇⠀⠀<br/>⠀⠀
⠀⠀⠙⠷⣤⣤⣤⣤⠾⠋⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⢸⡇⠀⠀ <br/>⠀⠀

            </p>
          
            <Button variant='outline-warning' size='lg' >버튼 껍데기</Button>
    </div>
  );
}

function About(){
  return(
    <>
    <div>회사정보 페이지</div>
    <Outlet></Outlet>
    </>
  );

}

function Member(){
  let {mb} ={};
  var [str, strchk] = useState("");
  let [dt, dtchk] = useState([]);

  useEffect(() => {
    ax.get('http://localhost:8090/member/admin')
    .then((data)=>{
      console.log(data.data);
      mb = data.data;
      strchk(`번호: ${mb.idx}, 아이디: ${mb.userId}, 이름 : ${mb.name}`);
      console.log('str :' + str);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, []);

  return(
    <div>
      <h2>사원정보 페이지</h2>
      {str}<br/><br/>
      <Button variant='primary' onClick={()=>{
        ax.get('http://localhost:8090/member/list')
        .then((data)=>{
          console.log(data);
          dtchk(data.data);
        })
        .catch((error)=>{
          console.log(error);
        })

      }
      }>회원정보 리스트 가져오기</Button>
      {
        dt.map((v,i)=>{
            return(
                <div key={i}>
                아아디: {v.userId}, 이름: {v.name}<br/>
              
                </div>
            )

        })
      }
      </div>
  );

}

function Loc(){
  return(
        <div>회사위치 페이지</div>
      );

}

export default App;
