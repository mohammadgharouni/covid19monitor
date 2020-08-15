import React, { useState } from 'react'
import "./Home.scss"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useDispatch } from 'react-redux'
import { setCountryName } from '../../redux/action'
import { withRouter } from 'react-router-dom'
const Home = (props) => {
    const [CountryName, setCountry] = useState("");
    const dispatch = useDispatch()

    // handleSubmit: function(txt) {
    //     this.props.onChange(txt);
    // },
    // handleChange: function(e) {
    //     var value = e.target.value;
    //     this.setState({message: value});
    //     this.handleSubmit(value);
    // },

    const onSubmitHandler=()=>{
        console.log("submited")
        props.history.push("chart")
        
    }
    const onChangeHandler =(event)=>{
        event.preventDefault();
        var value = event.target.value;
        console.log(value,"****")
        setCountry(value);   

        dispatch(setCountryName(value));
    }

    return (
        <div className="Home">
            <div className="titleContainer">
                    <h1 className="title">Welcome to corona virust monitor.</h1>
                    <h1 className="title">Please enter country name</h1>
                    <h1 className="title">{CountryName}</h1>
            </div>
            <div className="inputContainer">
                    <form onSubmit={()=>onSubmitHandler()}> 
                        <Input className="input" placeholder="country name" onChange={onChangeHandler} />
                        <div className="ButtonContainer">

                        <Button>Submit!</Button>
                        </div>
                    </form>

            </div>

        </div>
    )
}

export default withRouter( Home)
