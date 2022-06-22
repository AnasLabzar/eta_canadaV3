import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CountryList } from '../../Assets/Json/CountryList'

function Main() {
    const [checked, setChecked] = useState([]);

    const checkList = [
        'Holiday',
        'Family Visit',
        'Business',
        'Transit',
    ];
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');

    const fullNameFunc = event => {
        setFullName(event.target.value);

        console.log('Full name is:', event.target.value);
    };
    const emailFunc = event => {
        setEmail(event.target.value);

        console.log('email is:', event.target.value);
    };
    const nationalityFunc = event => {
        setNationality(event.target.value);

        console.log('Nationality is:', event.target.value);
    };
    const typtripFunc = event => {
        setChecked(event.target.value);

        console.log('Type Trips is:', event.target.value);
    };

    function SubmitFunctionStep1() {
        const contentStep1 = document.getElementById("contentStep1");
        const content1Step1 = document.getElementById("content1Step1");
        const contentStep2 = document.getElementById("contentStep2");
        const content2Step1 = document.getElementById("content2Step1");
        const article = document.getElementById("article");
        const FullName = document.getElementById("FullName");
        const emailadress = document.getElementById("emailadress");
        const selectCountry = document.getElementById("selectCountry");

        if (FullName.value.trim() == "" || emailadress.value.trim() == "" || selectCountry.value.trim() == ""){
            console.log(FullName.value);
            contentStep1.classList.add("hidden");
            content1Step1.classList.add("hidden");
            contentStep2.classList.add("!block");
            content2Step1.classList.add("!block");
            article.classList.add("!block");
        }
    }


    return (
        <>
            <div className="bg-[url('https://i.ibb.co/hWbnFdg/bg-Canada-jpg.png')] flex items-center bg-cover h-[40em] w-full py-[40px]">
                <div className="container mx-auto">
                    <h1 className='text-white font-bold text-3xl text-center my-6'>Prepare your Travel to Canada</h1>
                    <div className="flex-row flex mx-auto gap-8 max-w-[900px] i">
                        <div className="col-md-8 w-1/2">
                            <div className="Card border border-red-500 w-[20] h-[28em] mx-auto py-8 px-8 bg-[#ffffffba]">
                                <form action="" id='contentStep1' className='flex-col flex text-center pt-1'>
                                    <h1 className='font-semibold text-2xl pb-6 mb-8 border-b border-red-500'>Enter Personal Information</h1>
                                    <label className='text-md font-medium uppercase'>your name :</label>
                                    <input id='FullName' onChange={fullNameFunc} className='mt-1 py-2 px-4 border-black border' placeholder='Enter your full Name' type="text" />
                                    <br />
                                    <label className='text-md font-medium uppercase'>your email :</label>
                                    <input onChange={emailFunc} id='emailadress' className='mt-1 py-2 px-4 border-black border' placeholder='exemple@mail.com' type="text" />
                                    <br />
                                    <label className='text-md font-medium uppercase'>your Nationality :</label>
                                    <select onChange={nationalityFunc} id="selectCountry" class="select text-lg w-full py-2 text-[14px] select-border  px-4  bg-white border border-black text-gray-800">
                                        <option value='' disabled name="Nationality" selected className="!text-black">Your nationality :</option>
                                        {CountryList.map((data, key) => (
                                            <option key={key} value={data.name.code} className="!text-black !rounded-sm font-regular">
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                    <br />
                                </form>
                                {/* //******************************************************************** / */}
                                <form action="" id='contentStep2' className='hidden flex-col flex text-center pt-1'>
                                    <h1 className='font-semibold text-2xl pb-6 mb-8 border-b border-red-500'>Information Personnel</h1>
                                    <h4 className='opacity-70'>Full Name :</h4>
                                    <input className='bg-white font-medium mt-2 px-4' type="text" value={fullName} disabled />
                                    <h4 className='mt-6 opacity-70'>Address Mail :</h4>
                                    <input className='bg-white font-medium mt-2 px-4' type="text" value={email} disabled />
                                    <h4 className='mt-6 opacity-70'>Nationality :</h4>
                                    <input className='bg-white font-medium mt-2 px-4' type="text" value={nationality} disabled />
                                    <h4 className='mt-6 opacity-70'>Type Travel :</h4>
                                    <input className='bg-white font-medium mt-2 px-4' type="text" value={checked} disabled />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-8 w-1/2">
                            <div className="Card border border-red-500 w-[20] h-[28em] mx-auto py-8 px-8 bg-[#ffffffba]">
                                <form action="" id='content1Step1' className='flex-col flex text-center pt-1'>
                                    <h1 className='font-semibold text-2xl pb-6 mb-8 border-b border-red-500'>Choice type for your trip</h1>
                                    <label className='text-md font-medium uppercase'>select type of your trip :</label>
                                    <div className="checkboxMulti my-6 flex flex-col gap-3">
                                        {checkList.map((item, index) => (
                                            <div key={index}>
                                                <button className='text-left bg-white py-2 px-4 w-full gap-3 flex' disabled>
                                                    <input value={item} className="w-5 h-5 cursor-pointer " type="checkbox" onChange={typtripFunc} />
                                                    <span className="relative bottom-[3px] font-medium" >{item}</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </form>
                                {/* //******************************************************************** / */}
                                <form action="" id='content2Step1' className='hidden flex-col flex text-center pt-1'>
                                    <h1 className='font-semibold text-2xl pb-6 mb-8 border-b border-red-500'>Travel requirements and exemptions</h1>
                                    <p>Travellers entering Canada by land, air or water, regardless of citizenship, must meet COVID-19 requirements:<br />

                                        Canadians must meet and follow all of the same entry requirements
                                        All travellers must use ArriveCAN within 72 hours before your arrival to Canada
                                        Fully vaccinated travellers must use ArriveCAN to qualify for the exemption from quarantine and testing
                                        Under certain circumstances, you may be exempt from some requirements.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <button className='uppercase font-semibold bg-red-600 text-white py-2 px-8 text-lg mt-8 mx-auto flex' onClick={SubmitFunctionStep1}>contunie</button>
                </div>
            </div>
            <div id='article' className='bg-white w-full h-[60em] hidden'>
                <div className='max-w-[1320px] flex mx-auto flex-col mt-20'>
                    <h1 className='text-3xl text-center font-semibold'>New Federal Tourism Growth Strategy</h1>
                    <div class="flex-row flex mt-6 gap-10">
                        <div class="col-xs-12 col-sm-6">
                            <h2 className='text-xl font-bold mt-7'>About the consultation</h2>

                            <p>Innovation, Science and Economic Development Canada is conducting a public consultation on the development of a post-pandemic Federal Tourism Growth Strategy.</p>

                            <p>The consultation period will run for 64&nbsp;days, from May&nbsp;18, 2022, to July&nbsp;20, 2022.</p>
                            <h1 className='text-xl font-bold mt-6'>Context</h1>
                            <p>
                                In 2019, the Government of Canada launched Creating Middle Class Jobs: A Federal Tourism Growth Strategy. The objective of the strategy was to unleash tourism's potential to drive economic growth and job creation in all regions of the country.<br /><br />

                                The context in which that strategy was drafted is very different from today's. Canada's tourism sector was booming, bringing in record numbers of international visitors in 2017 and 2018 and accounting for one in ten jobs. The strategy was designed to build on this momentum.</p>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <img alt="" class="img-responsive center-block mrgn-tp-xl w-[120em] mt-8" data-entity-type="file" data-entity-uuid="7f96fdb7-af4d-4b99-8f9e-df64ccc0be52" src="https://ised-isde.canada.ca/site/canadian-tourism-sector/sites/default/files/inline-images/1024_05_21-Tourism-Canada-Glacial-mountain-Garibaldi-lake.jpg" /></div>
                    </div>
                    <div class="flex-row flex mt-6 gap-10">
                        <div class="col-xs-12 col-sm-6">
                            <img alt="" class="img-responsive center-block mrgn-tp-xl w-[120em] mt-8" data-entity-type="file" data-entity-uuid="7f96fdb7-af4d-4b99-8f9e-df64ccc0be52" src="https://ised-isde.canada.ca/site/canadian-tourism-sector/sites/default/files/inline-images/1024_05_21-Tourism-Canada-Glacial-mountain-Garibaldi-lake.jpg" /></div>
                        <div class="col-xs-12 col-sm-6">
                            <h2 className='text-xl font-bold mt-7'>About the consultation</h2>

                            <p>Innovation, Science and Economic Development Canada is conducting a public consultation on the development of a post-pandemic Federal Tourism Growth Strategy.</p>

                            <p>The consultation period will run for 64&nbsp;days, from May&nbsp;18, 2022, to July&nbsp;20, 2022.</p>
                            <h1 className='text-xl font-bold mt-6'>Context</h1>
                            <p>
                                In 2019, the Government of Canada launched Creating Middle Class Jobs: A Federal Tourism Growth Strategy. The objective of the strategy was to unleash tourism's potential to drive economic growth and job creation in all regions of the country.<br /><br />

                                The context in which that strategy was drafted is very different from today's. Canada's tourism sector was booming, bringing in record numbers of international visitors in 2017 and 2018 and accounting for one in ten jobs. The strategy was designed to build on this momentum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main