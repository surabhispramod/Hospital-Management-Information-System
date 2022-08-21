import React from 'react';


import { Paper } from '@material-ui/core';

export default function About(){
    const paperStyle={padding :'50px 20px',width:900, margin:"20px auto"}
    const myStyle={
        backgroundImage: 
 "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'90px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    
    };
    return(
       
        <div>
            
            <section classname="section">
                <div>
                    <div id='row'>
                        
                    <Paper elevation={5} style={paperStyle}>          
<h3 class="main" bottom="20%" sx={{myStyle}}><u>About Us</u></h3>


<p>Health sector in India continues to be characterized by high out-of-pocket expenditure, low financial protection, low health insurance coverage amongst both rural and urban population that forces people to undertake catastrophic expenditure. 62.58% of our population has to pay for their own health and hospitalization expenses and are not covered through any form of health protection. Each year 4.6% of the population is pushed below the poverty line as people meet their healthcare needs spending large proportion of their income and savings, borrowing money or selling their assets.
Recognizing that lack of access to quality healthcare debilitates life chances of individuals and their families and has a spillover effect on a country’s economy and society, Ayushman Bharat is a fundamental restructuring of the manner in which beneficiaries access healthcare services at the primary, secondary and tertiary care levels. To fulfil the vision of Health for All and Universal Health Coverage, enshrined in the National Health Policy 2017, the Government of India conceived Ayushman Bharat (Healthy India), a pioneering initiative led by Hon’ble Prime Minister of India.
It represents a transition from segmented, sectoral and fragmented program implementation models towards a comprehensive, holistic, need-based healthcare system. Ayushman Bharat aims to undertake path breaking interventions to holistically address health (covering prevention, promotion and ambulatory care), at primary, secondary and tertiary level.

</p>
</Paper ><br/>

<div>
<Paper elevation={5} style={paperStyle}>          
<h3 class="main" bottom="20%"><u>Assumptions</u></h3>

<p>•   Appointments can be cancelled 24hrs in advance without penalty<br/>
•   Patient medical history can be viewded by concerned doctor at the hospital with approval of the patient<br/>
•   Staff are assigned roles to ineract with the system
</p>
</Paper >
    </div>



                    </div>
                </div>
                
            </section>
            </div>
    )
}