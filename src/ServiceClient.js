const API_URL = 'https://content-sheets.googleapis.com/v4/spreadsheets/1RHmYo103XOAx-4xuVB-HkH3Gc0n5nbvlBTcJ2jV-0lg/values/Centre-Master!A1%3AT1000?valueRenderOption=UNFORMATTED_VALUE&key=AIzaSyDEhKuIvmI5VDHLu8FjvnLLrWZ-b4qpyQk';
const centres=[

    {
        code:'cod',
        name:'cod',
        parentCentre:'cod',
        address1:'cod',
        address2:'cod',
        city:'cod',
        state:'cod',
        pincode:'cod',
        contactName:'cod',
        emailId:'cod',
        phoneNo1:'cod',
        phoneNo2:'cod'


    }


];


const  getDataFromGSheet=async ()=>{
   return fetch(API_URL)
    .then(response => response.json())
    .then(data =>{

        localStorage.setItem('bk_centres', JSON.stringify(data));
        return data;

    } )
    .catch(err=>{
        let data=localStorage.getItem('bk_centres') || '{values:[]}';
        return JSON.parse(data);
    });

};


const apiClient={

    getCentres : async ()=>{

        const data =await  getDataFromGSheet();

        let centres=[];
        data.values.map((item,ictr)=>{
            if(ictr>0 && item[2])
                centres.push({
                    location:item[2],
                    name:item[3],
                    address1:item[6],
                    address2:item[7],
                    city:item[8],
                    state:item[9],
                    pincode:item[10],
                    phone1:item[12],
                    phone2:item[11],
                    contact:item[13],
                    email:item[14]});
            });
        return centres;
    }

}



export default apiClient;