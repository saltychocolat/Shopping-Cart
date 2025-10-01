
import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import styles from "./App.module.css"
import { useEffect, useState } from "react"

function App() {
  const [fruits,setFruits] = useState([]);

    useEffect(() =>{
      const fetchFruits = () =>{
        return fetch("https://www.fruityvice.com/api/fruit/all")
        .then(response => {
          if(!response.ok){
            throw new Error("Erroare la fetch "+ response.status)
          }
          return response.json();
        })
        .catch((error)=>{
          console.log("Error  " + error)
        })
      }
      const fetchImages = async() =>{
        let tempFruits = (await fetchFruits()).slice(0,5);
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
    
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet context={fruits}/>
    </div>
  )
}

export {App}
