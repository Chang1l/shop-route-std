import "./App.css";
import {useState} from 'react';
import {useNavigate}from 'react-router-dom';
export const Items=(props)=>{
let[likecnt, likecntchk]=useState(0);
let navigate=useNavigate();
let idx=props.ord;
let idxImg= props.ord> props.arrlen ? 0:props.ord;
let isStyle={backgroundImage:`url(/shop/img/jp${idxImg}.png`};

return(
    <div className="col-lg-4">
        <div className="imgBox">
            <div className="imgCon" alt={'이미지'+idx} style={isStyle}  onClick={(e)=>{
                navigate('/detail/'+props.ord+'/'+props.arrlen+'/'+likecnt);
                    // pathVariable 방식

    }}/>
             
            <h4>상품{idx}</h4>
            <p>상품{idx} 설명</p>
            <p className="lkcnt" onClick={()=> likecntchk(++likecnt)}>좋아요{likecnt}</p> 
           </div>
    </div>

);

}
