import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesPromotionSearch from './promotion/Search/Search'
import PagesPromotionForm from './promotion/Form/form'


const Root = () => {
  return (
    //definindo rotas dos components e etc...
    <Router>
      <Switch>
        <Route path="/edit/:id" component={PagesPromotionForm}/>
        <Route path="/" component={PagesPromotionSearch}/>
      </Switch>
    </Router>
  )
}

export default Root;