// Simple mock AI model without TensorFlow.js to avoid browser compatibility issues
// This provides consistent recommendations without the overhead of ML libraries

// Mock interaction data for simulation
const mockInteractionData = [
  { feature1: 0.5, feature2: 1.2 },
  { feature1: 0.1, feature2: 0.4 },
  { feature1: 0.8, feature2: 0.9 },
  { feature1: 0.3, feature2: 1.5 },
  { feature1: 0.7, feature2: 0.2 },
  { feature1: 0.9, feature2: 1.1 }
];

// Simulate AI model predictions without TensorFlow
function simulateModelPrediction(inputFeatures) {
  // Simple algorithm to generate realistic-looking predictions
  const predictions = [];
  
  for (let i = 0; i < 6; i++) {
    // Generate pseudo-random but consistent predictions based on input
    const base = (inputFeatures[0] + inputFeatures[1]) / 2;
    const noise = Math.sin(i * base * 10) * 0.2;
    const prediction = Math.max(0, Math.min(1, base + noise + (Math.random() * 0.1)));
    predictions.push(prediction);
  }
  
  return predictions;
}

export async function getRecommendations() {
  try {
    // Simulate async operation with a small delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Use current time and user agent for some variability
    const currentTime = Date.now();
    const userVariation = typeof navigator !== 'undefined' 
      ? navigator.userAgent.length % 10 / 10 
      : 0.5;
    
    // Sample input based on current context
    const sampleInput = [0.3 + userVariation * 0.2, 0.5 + (currentTime % 1000) / 2000];
    
    // Get simulated predictions
    const predictions = simulateModelPrediction(sampleInput);
    
    return predictions;
  } catch (error) {
    console.error('Error in AI model simulation:', error);
    
    // Fallback to static predictions
    return [0.8, 0.6, 0.7, 0.5, 0.9, 0.4];
  }
}

