/**
 * Calculates Body Mass Index (BMI) and returns numerical score + category
 * @param {number} heightCm - Height in centimeters
 * @param {number} weightKg - Weight in kilograms
 * @returns {object} { score, category, color, advice }
 */
export const calculateBMI = (heightCm, weightKg) => {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmiScore = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

  let category = 'Normal Weight';
  let color = 'text-lime-400';
  let advice = 'You are in optimal physical range! Keep pushing progressive overload and maintaining your current macro distribution.';

  if (bmiScore < 18.5) {
    category = 'Underweight';
    color = 'text-amber-400';
    advice = 'We recommend prioritizing strength training with a slight caloric surplus focusing on complex carbs and quality proteins.';
  } else if (bmiScore >= 25 && bmiScore < 29.9) {
    category = 'Overweight';
    color = 'text-orange-400';
    advice = 'Combine high-intensity interval training (HIIT) with strength hypertrophy to boost your resting metabolic rate.';
  } else if (bmiScore >= 30) {
    category = 'Obese';
    color = 'text-red-500';
    advice = 'Focus on low-impact cardio, dynamic mobility work, and targeted nutrition coaching to burn fat safely.';
  }

  return {
    score: bmiScore,
    category,
    color,
    advice
  };
};

/**
 * Format currency helper
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
};
