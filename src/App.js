import './App.css';
import {Button,Container, Navbar,Nav} from 'react-bootstrap';
import {Items} from './Items';
import {Details} from './Details';
import Main from './Main';
import {Routes, Route,Link ,useNavigate,Outlet}from 'react-router-dom';
import ComLife from './ComLife';


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
             <Nav.Link onClick={()=>navigate('/about')}>About</Nav.Link>
             <Nav.Link onClick={()=>navigate('/about/member')}>Member</Nav.Link>
             <Nav.Link onClick={()=>navigate('/about/loc')}>Loc</Nav.Link>
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
                <Route path="/test" element={<ComLife/>}/>

                 {/* 중첩(nested) 라우터 표현 */}
                <Route path="/about" element={<About/>}>
                  <Route path="member" element={<Member/>}/>
                  <Route path="loc" element={<Loc/>}/>
                </Route>
           
           
                <Route path="*" element={<div>에러코드: 404<br/>없는 페이지입니다.<br/></div>}/>
            </Routes>
            <Button> 버튼</Button>
            <Button variant='outline-warning' size='lg' >primary 버튼</Button>
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
  return(
    <div>사원정보 페이지</div>
  );

}

function Loc(){
  return(
        <div>회사위치 페이지</div>
      );

}

export default App;
