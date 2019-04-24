import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import Centre from './Centre'



class CentreList extends Component {

    constructor(props) {
        super(props)
        this.state={
            centres: props.centres, searchString: 'chennai'
        }
        this.searchCentre('chennai')
    }

    searchCentre = (keywordText) => {


        //filter the centre
        const filtered=this.props.centres.filter(centre=>{
              let keyword=keywordText.toLowerCase();
                if(keyword==="") keyword="chennai";
                centre.pincode=centre.pincode?centre.pincode.toString():"";
                return  centre.pincode.toLowerCase().indexOf(keyword)>=0 || centre.location.toLowerCase().indexOf(keyword)>=0 || centre.name.toLowerCase().indexOf(keyword)>=0 || centre.city.toLowerCase().indexOf(keyword)>=0;

            });

        this.setState({centres:filtered});

    }

    onSearchInputChange = (event) => {

        if(event.target.value.length<5) return;
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: 'chennai'})
        }
        this.searchCentre(event.target.value)

    }

    render() {
        return (
            <div>


                <TextField style={{padding: 24}}
                            id="searchInput"
                            variant="outlined"
                            placeholder="Search for Centres"
                            margin="normal"

                            onChange={this.onSearchInputChange} />
                {this.state.centres ? (

                    <div>

                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.centres.map(currentCentre => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Centre centre={currentCentre} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : <Grid container spacing={24} style={{padding: 24}}>

            </Grid> }
            </div>
        )
    }
}


export default CentreList;