import axios from 'axios'
import React from 'react'
import { useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import NewsResults from './NewsResults';

export default function Results(props) {
    
    let location=useLocation();
    let [data, setdata] = useState([]);

    
    const getResults=()=>{
        props.progress(10);
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a9ab389e35be489aa12bf20f733c0c2c&category=${props.choice}&country=in`).then(
            (response)=>{
                props.progress(78);
            setdata(response.data.articles);
            props.progress(100);

        },(error)=>{
            console.log(error);
            props.progress(100);
        })
    }
    
    useEffect(() => {
        document.title="News Related to - "+(location.pathname.slice(1)).charAt(0).toUpperCase()+location.pathname.slice(2);
        props.progress(10);
        getResults();
        props.progress(50);
        // eslint-disable-next-line
    },[props.choice]);
    
    
    return (
        <>  
            <div className='grid grid-cols-3 bg-[#735CDD]'>
            {/* <div className='text-white m-8 text-lg'>Articles Related to {props.choice} :</div> */}
            {data.map((item,key)=>{
                return <div  key={item.url}>
                <NewsResults  title={item.title} source={item.source.name} url={item.url} UrlToImage={item.urlToImage} date={item.publishedAt} desc={item.description}/>                
                </div>
            })}
            {/* {<props className="prog/"></props> */}
            {/* {props.progress(100)} */}
            </div>
        </>
    )
}
        
