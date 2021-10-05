import React, {useState,useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomtextField';
import { commerce } from '../../lib/commerce';


const AddressForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods= useForm();

    const fetchShippingCountries= async (checkoutTokenId)=>{

        const {countries}= await commerce.services.localeListCountries(checkoutTokenId);

        setShippingCountries(countries)
    }
    

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
      }, []);
    return (
        <>
            <Typography varient="h6" gutterBottom> Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name'/>
                        <FormInput required name='lastName' label='Last name'/>
                        <FormInput required name='address1' label='Address'/>
                        <FormInput required name='email' label='Email'/>
                        <FormInput required name='city' label='City'/>
                        <FormInput required name='zip' label='Zip/postal Code'/>


                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                    {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                     <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                         ))}
                                </Select>
                        </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <InputLabel> Shipping Subdivisions</InputLabel>
                                <Select value={} fullWidth onChange={}>
                                    <MenuItem key={} value={}>
                                        Select
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel> Shipping Options</InputLabel>
                                <Select value={} fullWidth onChange={}>
                                    <MenuItem key={} value={}>
                                        Select
                                    </MenuItem>
                                </Select>
                            </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
