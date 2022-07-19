import {
  Box,
  Cloud,
  Sparkles,
  Stars,
  TrackballControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const App = () => {
  return (
    <Container>
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 50], fov: 25 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 5]} />
        <Box>
          <meshStandardMaterial attach="material" color="hotpink" />
        </Box>
        <Stars count={30000} saturation={1000} />
        <Cloud opacity={0.2} speed={0.2} width={20} />
        <TrackballControls />
        <Sparkles count={1} />
      </Canvas>
    </Container>
  );
};

export default App;
