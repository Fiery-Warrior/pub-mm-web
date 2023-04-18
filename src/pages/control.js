import React from 'react';
import BasicCard from './Control/Rshell';
import SocialE from './Control/Worm';
import CompanyCard from './Control/Keylogger';
import ReconA from './Control/DoS';
import ScanningCardW from './Control/Virus';
import Bscanning from './Control/Bjacking';

const Control = () => {
return (
	
<div>
    {/* <h1>Retrieve data...</h1> */}
    <BasicCard/>
    <CompanyCard/>
    <ReconA/>
    <ScanningCardW/>
    <SocialE/>
    <Bscanning/>
</div>

);
};

export default Control;
