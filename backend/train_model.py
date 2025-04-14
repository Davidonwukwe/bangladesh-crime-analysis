import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
import joblib

# Load dataset
df = pd.read_csv("D:\\AU\\Data Analysis\\Project\\Crime Statistics Of Bangladesh 2010-2019.csv")

# Drop the 'Year' column as it's not needed
df.drop(columns=['Year'], inplace=True)

# Classify 'Crime_Severity' based on 'Total Cases'
def classify_severity(total_cases):
    if total_cases < 2000:
        return "Low"
    elif total_cases < 10000:
        return "Medium"
    else:
        return "High"

df['Crime_Severity'] = df['Total Cases'].apply(classify_severity)

# Encode 'Unit Name' to numeric values using LabelEncoder
encoder = LabelEncoder()
df['Unit Name'] = encoder.fit_transform(df['Unit Name'])

# Features (X) and Target variable (y)
X = df.drop(columns=['Total Cases', 'Crime_Severity'])
y = df['Crime_Severity']

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Define models in pipelines (SVM needs scaling)
models = {
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "SVM (Linear Kernel)": make_pipeline(StandardScaler(), SVC(kernel="linear", random_state=42)),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
}

# Evaluate each model
for name, model in models.items():
    print(f"\n====== {name} ======")

    # Cross-validation on the training set only
    cv_scores = cross_val_score(model, X_train, y_train, cv=5)
    print("Cross-validation Scores:", cv_scores)
    print("Mean CV Accuracy:", cv_scores.mean())

    # Train the model
    model.fit(X_train, y_train)

    # Predict and evaluate on the test set
    y_pred = model.predict(X_test)

    test_accuracy = accuracy_score(y_test, y_pred)
    print("\nTest Accuracy:", test_accuracy)
    print("Classification Report:\n", classification_report(y_test, y_pred))

# Explicitly select Random Forest as the best model
best_model_name = "Random Forest"
best_model = models[best_model_name]

# Retrain Random Forest (to be sure it's properly fitted)
best_model.fit(X_train, y_train)

# Save the best model
joblib.dump(best_model, 'best_model.pkl')
print(f"\nSelected model is {best_model_name}")
print("Model saved as 'best_model.pkl'")
