import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Centre = (props) => {
    return(
        <div>
          { props.centre ? (
                <Card>

                    <CardContent key={props.centre.code}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.centre.location}
                             <Typography component="p">






                                 {props.centre.name}

                            {props.centre.address1}<br/>
                             {props.centre.address2}<br/>
                             {props.centre.city}<br/>
                            {props.centre.state}<br/>
                            {props.centre.pincode}

                            </Typography>
                            <Typography component="p">
         { props.centre.email && <React.Fragment><a href="mailto:{props.centre.email}">{props.centre.email}</a><br/> </React.Fragment>}
          { props.centre.phone1 && <React.Fragment><a href="tel:+{props.centre.phone1}">+{props.centre.phone1}</a><br/> </React.Fragment>}
           { props.centre.phone2 &&  <React.Fragment><a href="tel:+{props.centre.phone2}">+{props.centre.phone2}</a><br/> </React.Fragment>}
           </Typography>




                        </Typography>


                    </CardContent>

                </Card>
          ): null }
        </div>
    )
}
export default Centre