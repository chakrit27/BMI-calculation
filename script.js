// JavaScript for BMI calculation
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var bmi = (weight / ((height/100) ** 2)).toFixed(2);
    var resultDiv = document.getElementById('result');
    var bmiResult = '<h2>Your BMI: ' + bmi + '</h2>';
    var riskCategory = '';
    var recommendation = '';
  
    if (bmi < 18.5) {
      riskCategory = 'Underweight';
      recommendation = 'You are underweight. Try to gain weight by consuming more calories through healthy foods and regular exercise.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      riskCategory = 'Normal weight';
      recommendation = 'Congratulations! You are in the healthy weight range. Keep up the good work with a balanced diet and regular exercise.';
    } else if (bmi >= 24.9 && bmi < 29.9) {
      riskCategory = 'Overweight';
      recommendation = 'You are overweight. Focus on losing weight by adopting a healthier lifestyle, including a balanced diet and regular exercise.';
    } else {
      riskCategory = 'Obesity';
      recommendation = 'You are obese. It is important to take action to reduce your weight for better health. Consider consulting a healthcare professional for personalized advice and support.';
    }
  
    var riskMessage = '<p>Risk Category: ' + riskCategory + '</p>';
    var recommendationMessage = '<p>Recommendation: ' + recommendation + '</p>';
  
    resultDiv.innerHTML = bmiResult + riskMessage + recommendationMessage;
  });