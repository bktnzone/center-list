import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select';
import Centre from './Centre'
import PropTypes from 'prop-types';


const propTypes = {
    centres: PropTypes.array
  };

class CentreList extends Component {



      componentDidMount=()=>{

        console.log(this.props.centres);
        let uniqueList=[...new Set(this.props.centres.map((item)=> item.location))];


        let locationOptions=  uniqueList.map(c=>{
            return {value:c,label:c};
         });


         this.setState({locationOptions:locationOptions});
      }

    constructor(props) {

        super(props)
        this.state={
            selectedOption: null,
            locationOptions:[],
            centres: props.centres, searchString: 'Annanagar'
        };

        this.searchCentre('Annanagar')
    }



    searchCentre = (keywordText) => {

        //filter the centre
        const filtered=this.props.centres.filter(centre=>{
              let keyword=keywordText.toLowerCase();
                if(keyword==="") keyword="Annanagar";
                centre.pincode=centre.pincode?centre.pincode.toString():"";
                return  centre.pincode.toLowerCase().indexOf(keyword)>=0 || centre.location.toLowerCase().indexOf(keyword)>=0 || centre.name.toLowerCase().indexOf(keyword)>=0 || centre.city.toLowerCase().indexOf(keyword)>=0;

            });

        this.setState({centres:filtered});

    }

    onSearchInputChange = (selectedOption) => {

        this.setState({ selectedOption });
        this.searchCentre(selectedOption.value);

    }

    render() {
        const { selectedOption,locationOptions } = this.state;

        return (
            <div>
                <Select
                        value={selectedOption}
                        onChange={this.onSearchInputChange}
                        options={locationOptions}
                    />


                {this.state.centres ? (

                    <div>

                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.centres.map(currentCentre => (
                                <Grid key={currentCentre.code} item xs={12} sm={6} lg={4} xl={3}>
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

CentreList.propTypes = propTypes;
export default CentreList;