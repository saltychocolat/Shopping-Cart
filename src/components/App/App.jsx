
import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import styles from "./App.module.css"
import { useEffect, useState } from "react"

function App() {
  const [fruits,setFruits] = useState([
  { name: "Apple", color: ["red", "green", "yellow"] }, 
  { name: "Banana", color: ["yellow", "green", "brown"] }, 
  { name: "Orange", color: ["orange", "green", "yellow"] }, 
  { name: "Mango", color: ["green", "yellow", "red"] }, 
  { name: "Pineapple", color: ["brown", "green", "yellow"] }, 
  { name: "Strawberry", color: ["red", "green", "white"] }, 
  { name: "Grapes", color: ["green", "red", "purple"] }
]);
  const [filters,setFilters] = useState([])
  const [search,setSearch] = useState([])

  let resultFilters = filters.concat(search)

  let resultFruits = [...fruits].filter(fruit => {
    if (filters && filters.length > 0) {
      return filters.every((c)=>fruit.color.includes(c));
    } else {
      return true;
    }
  });

  resultFruits = resultFruits.filter(fruit =>{
    if(search.length)
      return fruit.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    else
      return true
  })
  useEffect(() =>{
    const fetchImages = async() =>{
      let tempFruits = [...fruits]
      const fruitsWithImages = await Promise.all(
        tempFruits.map(async item => {
          return fetch(
            `https://api.unsplash.com/search/photos/?client_id=Zek7vZbknlIViM4ijJSpc6wLaOZwK2e6cITYrYXdfA8&query=${item.name}&per_page=1`
          )
          .then(response => response.json())
          .then(data => ({ ...item, url: data.results[0]?.urls?.small || null }))
          .catch(error => {
            console.log("Unsplash fetch error:", error)
            return { ...item, url: null }
          })
        })
      )

      setFruits(fruitsWithImages)

    }
    fetchImages()
  },[])

  const handleSectionClick = (filter)=>{  
    if(!filters.includes(filter)){
      setFilters((prev) =>[...prev,filter])
    }
  }

  const handleSearch = (input)=>{
    if(input)
      setSearch(input)
    else
      setSearch([])
  }

  const handleCancelFilter = (filter)=>{
    if(filter ==search){
      setSearch([])
    }
    else{
      let tempFilters = [...filters] 
      let index = tempFilters.indexOf(filter)
      tempFilters.splice(index,1)
      setFilters(tempFilters)
    }
  }
  

  return (
    <div className={styles.wrapper}>
      <Header count={resultFruits.length} handleSearch={handleSearch}/>
      <Outlet context={[fruits,handleSectionClick,resultFruits,resultFilters,handleCancelFilter]}/>
    </div>
  )
}

export {App}
