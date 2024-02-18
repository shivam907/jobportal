'use client'
import React from 'react'

const page = () => {
    const fetchItems = async () => {
    try {
      const response = await fetch('/hello/api');
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log(data)
      } else {
        console.error('Failed to fetch items');
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  React.useEffect(()=>{
    console.log("yesss")
    fetchItems()
  },[])
  return (
    <div>page</div>
  )
}

export default page