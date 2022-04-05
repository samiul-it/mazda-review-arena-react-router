import { useEffect, useState } from "react"

const useReviews=()=>{
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('customerReview.json')
        .then(response=>response.json())
        .then(data=>setReviews(data));
    },[])
    return [reviews,setReviews];
}
export default useReviews;