import {useEffect, useState} from 'react';

const useFeature = (createFeature, dependencies = []) => {
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    const featureInstance = createFeature();

    featureInstance.load?.();

    setFeature(featureInstance);

    if (featureInstance.onUnload) {
      return featureInstance.onUnload;
    }
  }, dependencies);

  return feature;
}

export default useFeature;