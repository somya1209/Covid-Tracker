import React from 'react'

class NewsFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            error:null
            
        }
    }
    componentDidMount(){
        const apiurl='http://newsapi.org/v2/everything?q=covid&from=2020-05-22&sortBy=publishedAt&apiKey=f80c12a5df93415397b30c170713d48e';
        fetch(apiurl)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    news:result.articles
                });
                console.log(this.state.news)
            },
        (error)=>{
            this.setState({error})
        }
        )

    }

    render(){
        return(
            <div>
                hey there;
            </div>
        );

    }
    
    
}
export default NewsFetch