import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    <Particles
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{"fps_limit":60,"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onHover":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"push":{"particles_nb":4},"repulse":{"distance":100,"duration":0.4}}},"particles":{"color":{"value":"#52B2BF"},"links":{"color":"#52B2BF","distance":150,"enable":true,"opacity":0.4,"width":1},"move":{"bounce":false,"direction":"none","enable":true,"outMode":"out","random":false,"speed":1,"straight":false},"number":{"density":{"enable":true,"area":800},"value":80},"opacity":{"value":0.5},"shape":{"type":"circle"},"size":{"random":true,"value":5}},"detectRetina":true}}/>
    
  )
}

export default Particle