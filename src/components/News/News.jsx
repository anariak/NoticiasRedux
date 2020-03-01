import React,{ Component } from 'react'
import NewsForm  from './NewsForm'
import NewsList  from './NewsList'

class News extends Component{
    render(){
        return(
            <div>
                <NewsForm />
                <NewsList />
            </div>
        )
    }
}

export default News