
import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import styles from "./App.module.css"
import { useEffect, useState } from "react"


function App() {
  const [fruits, setFruits] = useState([
    { 
      name: "Apple", 
      color: ["red", "green", "yellow"], 
      price: 2.5, 
      bio: "Mere crocante și zemoase, cultivate în livezi ecologice. Bogate în fibre, vitaminele A și C, susțin digestia și oferă o senzație de sațietate naturală. Perfecte pentru gustări rapide sau tarte aromate.",
      family: "Pome",
      vitamins: ["Vitamin A", "Vitamin C"]
    }, 
    { 
      name: "Strawberry", 
      color: ["red", "green", "white"], 
      price: 2.9, 
      bio: "Căpșuni parfumate și dulci, culese manual din culturi locale. O sursă excelentă de antioxidanți și vitamina C. Se potrivesc perfect cu frișcă, iaurt sau în deserturi de vară.",
      family: "Berry",
      vitamins: ["Vitamin C", "Vitamin B9"]
    }, 
    { 
      name: "Orange", 
      color: ["orange", "green", "yellow"], 
      price: 2.2, 
      bio: "Portocale proaspete și aromate, pline de vitamina C și antioxidanți. Întăresc sistemul imunitar și oferă un gust dulce-acrișor revigorant. Recomandate pentru sucuri naturale sau deserturi ușoare.",
      family: "Citrus",
      vitamins: ["Vitamin C", "Vitamin B1"]
    }, 
    { 
      name: "Banana", 
      color: ["yellow", "green", "brown"], 
      price: 1.8, 
      bio: "Banane coapte natural, sursă excelentă de potasiu și energie de durată. Ideale pentru micul dejun, smoothie-uri sau gustări sănătoase înainte de antrenament. Ajută la echilibrarea nivelului de zahăr din sânge.",
      family: "Tropical",
      vitamins: ["Vitamin B6", "Vitamin C"]
    }, 
    { 
      name: "Mango", 
      color: ["green", "yellow", "red"], 
      price: 3.4, 
      bio: "Mango tropical, dulce și parfumat, considerat 'regele fructelor'. Bogat în vitaminele A, C și E, sprijină sănătatea pielii și a sistemului imunitar. Excelent în smoothie-uri, salate exotice sau deserturi fine.",
      family: "Tropical",
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin E"]
    }, 
    { 
      name: "Pineapple", 
      color: ["brown", "green", "yellow"], 
      price: 3.1, 
      bio: "Ananas proaspăt, cu gust intens și echilibrat între dulce și acid. Conține bromelaină, o enzimă benefică pentru digestie și sistemul imunitar. Ideal pentru cocktailuri, prăjituri sau preparate asiatice.",
      family: "Tropical",
      vitamins: ["Vitamin C", "Vitamin B1"]
    }, 
    { 
      name: "Grapes", 
      color: ["green", "red", "purple"], 
      price: 2.7, 
      bio: "Struguri zemoși și dulci, crescuți în podgorii însorite. Conțin polifenoli și resveratrol, compuși care contribuie la sănătatea inimii. Perfecți pentru gustări, sucuri naturale sau vinuri artizanale.",
      family: "Berry",
      vitamins: ["Vitamin C", "Vitamin K"]
    }
  ]);

  const [cart,setCart] = useState([])
  const [filters,setFilters] = useState([])
  const [search,setSearch] = useState([])

  let familyList = ["Pome", "Tropical", "Citrus", "Berry"]
  let resultFilters = filters.concat(search)

  let resultFruits = [...fruits].filter(fruit => {
    if (filters && filters.length > 0) {
      return filters.every((c)=>{
        if(familyList.includes(c))
          return fruit.family.includes(c)
        return fruit.color.includes(c)
      });
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
          .then(data => ({ ...item, url: data.results[0]?.urls?.regular || null }))
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

  const handleAddCart = (fruit, quantity) => {
    setCart(prev => {
      const index = prev.findIndex(item => item.fruit.name === fruit.name);

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = { ...updated[index], quantity };
        return updated;
      }
      return [...prev, { fruit, quantity }];
    });
  };

  const handleRemoveCart = (fruit)=>{
    let temp = [...cart]
    temp = temp.filter(item => item.fruit.name !=fruit.name)
    setCart(temp)
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
      <Header cart={cart} handleSearch={handleSearch} handleRemoveCart={handleRemoveCart}/>
      <Outlet context={[fruits,handleSectionClick,resultFruits,resultFilters,handleCancelFilter,cart,handleAddCart,handleRemoveCart,search]}/>
    </div>
  )
}

export {App}
