import streamlit as st
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, f1_score, precision_score, recall_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler


@st.cache_data
def load_data():
    clean_data = pd.read_csv('./data/processed/NFL_verse_training_data.csv')
    final_data = pd.read_csv('./data/processed/NFL_verse_final_training_data_after_encoding.csv')
    selected_data = pd.read_csv('./data/processed/NFL_verse_training_data_final_after_encoding_selected.csv')
    y = pd.read_csv('./data/processed/y.csv').squeeze("columns")
    return clean_data, final_data, selected_data, y

def train_model(data, target):
    X_train, X_test, y_train, y_test = train_test_split(
        data,
        target,
        test_size=0.2,
        random_state=42,
        stratify=target
    )
    model = Pipeline(
        steps=[
            ("scaler", StandardScaler()),
            ("classifier", LogisticRegression(max_iter=1000, random_state=42)),
        ]
    )
    model.fit(X_train, y_train)
    y_pred_train = model.predict(X_train)
    y_pred_test = model.predict(X_test)
    train_score = accuracy_score(y_train, y_pred_train)
    test_score = accuracy_score(y_test, y_pred_test)
    return model, train_score, test_score, y_pred_test, y_test

# Load data
clean_data, final_data, selected_data, y = load_data()
# Train the model
model, train_score, test_score, y_pred, y_test = train_model(selected_data, y)

# Create Streamlit app
st.title('NFL Injury Prediction Report')
st.write("This is the report of our NFL injury prediction model. We used historical data from the NFL-verse to train our model ranging from 2010 to 2023.")
st.write("The model predicts injuries based on various factors and data extracted from the datasets.")
st.write("The data used for training includes play-by-play data and schedule data.")
st.write("We ended up using only Pass and Run plays for our model.")
st.write("The model is trained using a Logistic Regression classifier.")

# Display processed data
st.subheader('Processed Data')
st.write("This is the processed data used for training the model. ")
st.dataframe(clean_data.head(10))

# Display the plots
st.subheader('Data Visualizations of Pass or Run Plays')
st.write("This section contains various visualizations that help understand the data better.")
st.image('./visualizations/injuries_total.png', caption='Total Injuries')
st.image('./visualizations/injuries_by_year.png', caption='Injuries by Position')
st.image('./visualizations/injuries_by_surface.png', caption='Injuries by Surface')
st.image('./visualizations/injuries_by_body_part.png', caption='Injuries by Body Part')

# Model training
st.subheader('Model Training')
st.write('Before training we first encoded the categorical variables and standardized the data.')
st.dataframe(final_data.head(10))
st.write("Then we performed an information gain analysis to see which features are most important for our model.")
st.image('./visualizations/information_gain.png', caption='Information Gain Analysis')
st.write("We then split the data into training and testing sets (80-20).")
st.write("We used the top 20 features selected by the information gain analysis:")
st.dataframe(selected_data.columns)
st.write("This is the final data used for training the model.")
st.dataframe(selected_data.head(10))

# Model performance metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, zero_division=0)
recall = recall_score(y_test, y_pred, zero_division=0)
f1 = f1_score(y_test, y_pred, zero_division=0)

st.subheader('Model Performance Metrics')
col1, col2 = st.columns(2)

with col1:
    st.metric(label="Training Set Score", value=f"{(train_score * 100):.2f}%")
    st.metric(label="Accuracy", value=f"{accuracy * 100:.2f}%")
    st.metric(label="Recall", value=f"{recall * 100:.2f}%")

with col2:
    st.metric(label="Test Set Score", value=f"{(test_score * 100):.2f}%")
    st.metric(label="Precision", value=f"{precision * 100:.2f}%")
    st.metric(label="F1 Score", value=f"{f1 * 100:.2f}%")

# Model confusion matrix
st.write("The confusion matrix shows the performance of the classifier on the test set.")
st.subheader('Confusion Matrix')
st.image('./visualizations/confusion_matrix.png', caption='Confusion Matrix')
