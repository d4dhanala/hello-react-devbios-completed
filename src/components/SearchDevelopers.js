import React, { Component } from 'react'
import DeveloperBio from './DeveloperBio';
import clean from 'clean-tagged-string'
import queryArgs from '../GraphQLUtils/devQueryArgsBuilder';

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
        let queryArgsFunction = queryArgs[this.state.queryName];
        let queryVars = queryArgsFunction(this.state.queryValue);

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
        fetch(`https://dev-bios-graphql-dot-tech-services-1000201953.uc.r.appspot.com/q?query=${query}`)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                developers: response.data[this.state.queryName],
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
                {
                    (this.state.displayResults)
                        ?
                            this.state.developers.map(
                                (dev) => <DeveloperBio developer={dev} key={dev.id}/>
                            )
                        :
                        <span></span>
                }
                </div>
            </div>
        )
    }
}

export default SearchDevelopers
