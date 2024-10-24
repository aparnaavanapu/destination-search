import {Component} from 'react'
import DestinationItem from '../destinationItem'
import './index.css'

class DestinationSearch extends Component{

    state={searchInput:'',
        isFocused:false
    }

    onChangeSearchInput = event=>{
        this.setState({searchInput:event.target.value})

    }

    clearSearchInput = () => {
        this.setState({searchInput: ''})
      }

      handleFocus = () => {
        this.setState({isFocused: true})
      }
    
      // To handle blur event
      handleBlur = () => {
        this.setState({isFocused: false})
      }


    render(){

        const {searchInput,isFocused}=this.state
        const {destinationsList}=this.props
        const searchResult=destinationsList.filter(eachItem=>eachItem.name.toLowerCase().includes(searchInput.toLowerCase()))
        return(
            <div className="bg-container">
                <div className="items-container"> 
                    <h1 className="heading">Destination Search</h1>
                    <div className="search-container">
                        <input type="text" onChange={this.onChangeSearchInput} value={searchInput} placeholder="Search" className="search-input" onFocus={this.handleFocus}  onBlur={this.handleBlur}/>
                        {isFocused && searchInput && (
              <button className="delete-img" onMouseDown={this.clearSearchInput} >
                <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className="cross-img"/>
              </button>
            )}
                        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className="search-icon"/>
                    </div>
                    <ul className="lists-container">
                        {searchResult.map(eachItem=>(
                            <DestinationItem key={eachItem.id} destinationDetails={eachItem}/>
                        ))
                    }
                    </ul>
                </div>
            </div>
        )
    }
}


export default DestinationSearch