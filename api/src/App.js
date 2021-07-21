import React ,{useState, useEffect} from 'react'
import Photo from "./Photo"
import './App.css';

const App = () =>{
  const appID = 'qfyxzuZqOf49OPMmZrNKsfKtFc0hLgFVGopCtZrAjBU'
  const AppKey = 'qfyxzuZqOf49OPMmZrNKsfKtFc0hLgFVGopCtZrAjBU'
  // const example = 'https://source.unsplash.com/user/{USERNAME}/likes'
 const [search, setSearch] = useState('')
  // const [query, setquery] = useState('')
 useEffect (()=>{
  getPhotos();

 },[])
  
 const [photos, SetPhoto] = useState([])

 const getPhotos = async (search) =>{
  //  https://api.unsplash.com/search/photos?query=dogs
  console.log('query',search)

   const response = await fetch (`https://api.unsplash.com/search/photos?query=${search}&client_id=qfyxzuZqOf49OPMmZrNKsfKtFc0hLgFVGopCtZrAjBU`)
   const data = await response.json();
   console.log(data)
   SetPhoto(data.results)
  console.log('search',search)
   console.log(data[0]);
 }

 const updatesearch = e =>{
   console.log('before')
   console.log(search)
   setSearch(e.target.value)
   console.log('updatasearch',e,this)
   
 }
 const getSearch = e =>{
   e.preventDefault();
   console.log('getSearch')
   getPhotos(search)
  //  setquery(search)
 }
  return(
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type='text' value={search} onChange={updatesearch}/>
       <button className="search-button" type="submit">Search</button>
     </form>
     {photos.map((photo,key) =>(
       <Photo key={key}
         user={photo.user.first_name}
         image={photo.urls.small}

       />
     ))}
    </div>
  )
}
export default App;
