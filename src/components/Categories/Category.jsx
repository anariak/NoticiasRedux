import React,{ Component } from 'react'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'


class Category extends Component{
    render(){
        const { categories, addCategories } = this.props
        return(
            <div>
                <CategoryForm onSubmit={addCategories}/>
                <CategoryList categories={categories}/>
            </div>
        )
    }
}

export default Category