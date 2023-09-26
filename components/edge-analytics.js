import { useEffect } from 'react';

const EdgeAnalytics = ({ slug }) => {
  useEffect(() => {
    navigator.sendBeacon('/api/page-view', JSON.stringify({ slug: slug }));
  }, []);
};

export default EdgeAnalytics;
