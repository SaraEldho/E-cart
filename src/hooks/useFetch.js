import { useEffect, useState } from "react"

//userdefined hooks
const useFetch=(url)=>{
  const [data,setData]=useState("")
  useEffect(()=>{
    fetch(url).then((res)=>{
      res.json().then((array)=>setData(array.products))
    })
  },[url])
  return data
}

export default useFetch