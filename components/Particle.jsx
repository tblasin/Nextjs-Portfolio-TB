import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Particle() {

    const particlesInit = async (main) => {
        console.log(main);
            await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };




  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}

        options={
            {
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                
                background: {
                    color: {
                        value: "#d6d4d4",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.6,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#05a6a1",
                    },
                    links: {
                        color: "#02808e",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            
            
            }}
        />
  );

    
  
}

export default Particle;