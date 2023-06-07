import React from 'react';
import Stack from 'react-bootstrap/esm/Stack';
import {Button, Container} from "react-bootstrap";
import {SvgView} from "../components/SvgView";
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <h2>Hi, my name Anton.</h2>
            <div className="mb-2 ">I'm currently learning Frontend development.</div>
            <h5>My technologies stack:</h5>
            <div className="m-lg-3">
                <h5>Framework React.js</h5>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">React.js</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">React Router</div>
                </Stack>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">Redux</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">Redux-Toolkit</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">Redux-Saga</div>
                </Stack>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">Material-UI</div>
                </Stack>

                <h5>Frontend</h5>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">TypeScript</div>
                </Stack>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">JavaScript</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">ES5 / ES6</div>
                </Stack>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">lodash</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">axios</div>
                </Stack>
                <h5>Layout</h5>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">HTML5</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">CSS3</div>
                </Stack>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">Flexbox</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">CSS Grid</div>
                </Stack>
                <Stack className="m-2" direction="horizontal" gap={2}>
                    <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'gray'}}/>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">SASS</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">StyledComponent</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">CSS-in-JS</div>
                    <div style={{borderRadius: '5px'}} className="bg-warning border p-1">CSS Modules</div>
                </Stack>
            </div>



            <h5>Сontacts</h5>
            <Stack className="m-2" direction="horizontal" gap={2}>
                <a href="https://t.me/AntonH59">
                    <SvgView id="telegram"/>
                </a>
                <a href="https://vk.com/antonminimoto">
                    <SvgView id="vk"/>
                </a>
                <a href="mailto:HanzhinAnton@gmail.com">
                    <SvgView id="mail"/>
                </a>
            </Stack>

            <Button className="m-2 mt-5" onClick={() => navigate('/')}>Go Back</Button>

        </Container>
    );
};

export default About;