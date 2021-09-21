import React, {useEffect, useState} from 'react';
import PromotionCard from 'components/Promotion/card/card';
import axios from 'axios';



const PagesPromotionSearch = () =>{
  const [promotions, setPromotions] = useState([]);//variavel que vai receber o banco
  useEffect(()=>{
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) =>{// se obter resposta chame o codigo abaixo:
        setPromotions(response.data) //armazenando na variavel
      });
  }, []);

  return (
    <div className="App" style={{
      maxWidth: 800,
      margin: '30px auto',
    }}>

      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  )
}

export default PagesPromotionSearch;