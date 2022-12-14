import "./App.css";
import {useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {Button,Container,CustomBtn}from './StyleCss';
export const Details=(props)=>{
let[likecnt, likecntchk]=useState(0);
let {pid, ln}=useParams();
if(pid>ln)pid=0;
let nav= useNavigate();
let pidImg=pid>ln? 0:pid;

let divStyle={backgroundImage:`url(/shop/img/jp${pidImg}.png`};

return(
        <Container>
        <div className="imgBox">
            <div className="imgCon" alt={'이미지'+pid} style={divStyle} />
             
            <h4>상품{pid}</h4>
            <p>상품{pid} 설명</p>
            <p className="lkcnt" onClick={()=> likecntchk(++likecnt)}>좋아요{likecnt}</p> 
           </div>
            <Button primary onClick={()=>nav(-1)}>뒤로가기 </Button><br/>
            <CustomBtn bg={'#000'} cl={'#fff'}>검은색 버튼</CustomBtn>
            <CustomBtn bg={'#f00'} cl={'#fff'}>빨간색 버튼</CustomBtn>
           </Container>

);

}
