from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import os
import joblib


app = Flask(__name__)
data_path = os.path.join('data', 'crime_data.csv')
df = pd.read_csv(data_path)

# Load the trained model
model = joblib.load('best_model.pkl')

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the POST request
    data = request.get_json()
    
    # Ensure the 'data' key is present
    if 'data' not in data:
        return jsonify({"error": "No data provided"}), 400
    
    # Get the input features from the 'data' list
    input_features = np.array(data['data'])
    
    # Make the prediction
    predictions = model.predict(input_features)
    
    # Return the result as a JSON
    return jsonify({"predictions": predictions.tolist()})

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/data/filter', methods=['GET'])
def get_filtered_data():
    start_year = request.args.get('start_year', type=int)
    end_year = request.args.get('end_year', type=int)
    unit_name = request.args.get('unit_name', default=None, type=str)

    filtered_df = df
    if start_year and end_year:
        filtered_df = filtered_df[(filtered_df['Year'] >= start_year) & (filtered_df['Year'] <= end_year)]
    if unit_name:
        unit_names = unit_name.split(',')  # Support multiple units via comma-separated list
        filtered_df = filtered_df[filtered_df['Unit Name'].isin(unit_names)]
    return jsonify(filtered_df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True, port=5001)