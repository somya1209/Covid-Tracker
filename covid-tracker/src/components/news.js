import React from 'react'
import CardList from './CardList/card-list'

class NewsFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
            error:null
            
        }
    }
    componentDidMount(){
        const apikey=''
        const apiurl=`https://newsapi.org/v2/everything?q=covid&apiKey=${apikey}`;
        fetch(apiurl)
        .then(res=>res.json())
        .then((result)=>{
                this.setState({
                    articles:result.articles
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
            <>
                  <center>
        <h1
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#063146",
            fontSize: 40,
            marginTop:'10px'
          }}
        >
          Covid-19 Headlines
        </h1>
      </center>
            
            <CardList articles={this.state.articles}/>
            </>
            
        );

    }
    
    
}
export default NewsFetch