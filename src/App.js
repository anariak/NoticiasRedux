import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Category from './components/Categories/Category'
import News from './components/News/News'


class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Category />
                <News />
            </div>
           )
    }
}

 const mapStateToProps=(state)=>{
     const { Categorias:{ data: categories }} = state
     //Esto agrega un alias a la propiedad de data dentro de Categorias
 }
const mapDispatchToProps=dispatch =>({

})
export default connect(mapStateToProps, mapDispatchToProps)(App);

