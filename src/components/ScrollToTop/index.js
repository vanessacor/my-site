import { useEffect, useRef } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function ScrollToTop() {
  const location = useLocation();
  if (location.pathname !== usePrevious(location.pathname)) {
    window.scrollTo(0, 0);
  }
  return null;
}

export default withRouter(ScrollToTop);
