import React, { Component } from 'react'
import DeveloperBio from './DeveloperBio';
import clean from 'clean-tagged-string'

export class SearchDevelopers extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryName:'devsByFirstName',
            queryValue:'',
            developers:[],
            displayResults:false
        }
    }
    
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        this.setState({
            queryValue: value
        })
    }


    handleSelectChange = (event) => {
        const target = event.target;
        const value = target.value;

        this.setState({
            queryName:value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let queryVars;

        switch(this.state.queryName){
            case 'devsByFirstName':
                queryVars = `(name:"${this.state.queryValue}")`
                break;
            case 'devsByLastName':
                queryVars = `(name:"${this.state.queryValue}")`
                break;
            case 'devsByFavLang':
                queryVars = `(language:"${this.state.queryValue}")`
                break;
            case 'devsByYearStarted':
                queryVars = `(year:"${this.state.queryValue}")`
                break;
        }

        const query = clean `{
            ${this.state.queryName}${queryVars}{
                id,
                firstName,
                lastName,
                favoriteLanguage,
                yearStarted
            }
        }`

        this.callGraphQL(query);
    }

    callGraphQL = (query)=>{
        fetch(`https://dev-bios-graphql.cfapps.io/q?query=${query}`)
        .then(response=>response.json())
        .then(response=>{
            switch(this.state.queryName){
                case 'devsByFirstName':
                        this.setState({
                            developers:response.data.devsByFirstName
                        });
                    break;
                case 'devsByLastName':
                      this.setState({
                        developers:response.data.devsByLastName
                     });
                    break;
                case 'devsByFavLang':
                        this.setState({
                            developers:response.data.devsByFavLang
                         });
                    break;
                case 'devsByYearStarted':
                        this.setState({
                            developers:response.data.devsByYearStarted
                         });
                    break;
            }
            this.setState({
                displayResults:true
            })
            
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Search Developer Bios</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.submitForm} id="searchForm" >
                                <div className="form-group">
                                    <label htmlFor="searchField">Choose Field</label>
                                    <select name="searchField" className="form-control" onChange={this.handleSelectChange}>
                                        <option value="devsByFirstName">First Name</option>
                                        <option value="devsByLastName">Last Name</option>
                                        <option value="devsByFavLang">Favorite Language</option>
                                        <option value="devsByYearStarted">Year Started</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="search" className="form-control" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    (this.state.displayResuts)
                        ?
                            this.state.developers.map(
                                (dev) => <DeveloperBio developer={dev} key={dev.id}/>
                            )
                        :
                        <span></span>
                }
            </div>
        )
    }
}

export default SearchDevelopers
