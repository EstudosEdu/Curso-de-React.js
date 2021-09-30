import React, { useState, useEffect } from 'react';
import './Search.css';
import PromotionList from '../List/List.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';


const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);//variavel que vai receber o banco
  const [search, setSearch] = useState('');/*Variavel que recebe constantemente o valor do input*/

  useEffect(()=>{
    const params = {};
    if(search){//se tiver algo em search:
      params.title_like = search;//o _like serve para se dentro do titulo tiver algo parecido com oq estamos buscando ele trás
    }
    axios.get('http://localhost:5000/promotions?_embed=comments', { params })//depois passamos o valor na frente da url para ele buscar lá no json e trazer o resultado
      .then((response) =>{// se obter resposta chame o codigo abaixo:
        setPromotions(response.data) //armazenando na variavel
      });
  }, [search]);//o use effects nesse caso só atualiza quado o valor de search mudar

  return(
    <div className="promotion-search">
      
      <header className="promotion-search__hearder">
        
        <h1>Promo Show</h1>
         <Link to="/create">Nova Promoção</Link>{/*Passando a rota criada de lá do ROOT usando o react-router-dom*/}  
      
      </header>
      
      <input 
        type="search"
        className="promotion-search__input"
        placeholder="Buscar" 
        value={search}/*Passando o valor para o  useState search*/
        onChange={(ev) => setSearch(ev.target.value)}/*pegando o evento de quando o valor do input for modificado e passando para o search o valor novamente a cada alteração no valor*/
      />
      <PromotionList promotions={promotions} loading={!promotions.length} />
    </div>
  )

};

export default PromotionSearch;