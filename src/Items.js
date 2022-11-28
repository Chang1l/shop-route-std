import "./App.css";
import {useState} from 'react';
import $ from 'jquery';
import {useNavigate}from 'react-router-dom';
export const Items=(props)=>{
let[likecnt, likecntchk]=useState(0);
let navigate=useNavigate();

let divStyle={backgroundImage:'url('+process.env.PUBLIC_URL+'/img/jp'+props.ord+'.png'};

return(
    <div className="col-lg-4">
        <div className="imgBox">
            <div className="imgCon" alt={'이미지'+props.ord} style={divStyle}  onClick={(e)=>{
                navigate('/detail/'+props.ord+'/'+props.arrlen);
                    // pathVariable 방식

            // window.location.href='/detail';
            // let x =e.pageX;
            // const y=e.pageY;
            // console.log(`x축: ${x}, y축: ${y}`);
            // $('.modBox').show();
            // $('.modBox').css({top:y+'px',left: x+'px'});
            // $('.modBox h3').text('상품'+props.ord);
            // $('.modBox p').text('상품'+props.ord+' 설명');

    }}/>
             
            <h4>상품{props.ord}</h4>
            <p>상품{props.ord} 설명</p>
            <p className="lkcnt" onClick={()=> likecntchk(++likecnt)}>좋아요{likecnt}</p> 
           </div>
    </div>

);

}
