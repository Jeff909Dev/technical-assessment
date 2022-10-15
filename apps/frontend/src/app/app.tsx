import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

const Wrapper = styled.div`

`;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </Wrapper>
  );
}

export default App;
