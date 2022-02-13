import {React,useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
    const [search,setSearch]=useState ( "dolphing");
    const [data,setData]=useState ();
    const [isLoading, setIsloding] = useState(true);
    console.log(search);


    const url =`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=4x0z6TQTZIbdFMKOI98VMWaFuknb05vQ&rating=g`;
    useEffect(() => {
        const fetchData = async () => {
           const result = await fetch(url);
           const data = await result.json();
           console.log(data);
            setData(data);
            console.log(data);
            setIsloding(false);
        };
        fetchData();
      }, [search]);
      if (isLoading) {
        return <div> Loading... </div>;
      }

  return (
    <div>
      
      <div style={{width: "70%" , float: "left"}}>
        <GifList gifts={data}/>
      </div>
      <div style={{width: "30%" , float: "right"}}>
        <GifSearch setSearch={setSearch} />
      </div>
    </div>
  )
}

export default GifListContainer