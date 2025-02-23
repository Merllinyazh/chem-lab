import torch
import nltk
from flask import Flask, request, jsonify
from flask_cors import CORS
from newspaper import Article
from transformers import T5ForConditionalGeneration, T5Tokenizer

# Download NLTK tokenizer
nltk.download('punkt')

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Load the T5 model (fine-tuned for question generation)
MODEL_NAME = "mrm8488/t5-base-finetuned-question-generation-ap"
tokenizer = T5Tokenizer.from_pretrained(MODEL_NAME)
model = T5ForConditionalGeneration.from_pretrained(MODEL_NAME)

# Store asked questions to avoid repetition
asked_questions = set()

def extract_text_from_url(url):
    """Scrape and extract text from a given URL."""
    try:
        article = Article(url)
        article.download()
        article.parse()
        return article.text if article.text else "⚠️ No text extracted!"
    except Exception as e:
        return f"🚨 Error extracting text: {str(e)}"

def generate_questions(text, num_questions=10):
    """Generate unique questions using the T5 model."""
    global asked_questions
    
    # Preprocess the input text
    inputs = f"generate questions: {text[:1000]}"  # Limit to 1000 characters
    input_ids = tokenizer.encode(inputs, return_tensors="pt")

    # Generate questions
    outputs = model.generate(input_ids, max_length=256, num_return_sequences=num_questions, do_sample=True)
    questions = [tokenizer.decode(output, skip_special_tokens=True) for output in outputs]

    # Ensure uniqueness
    unique_questions = [q for q in questions if q not in asked_questions]
    asked_questions.update(unique_questions)

    return unique_questions[:num_questions]

@app.route('/generate_questions', methods=['POST'])
def generate_questions_api():
    """API endpoint to generate unique questions."""
    data = request.json
    url = data.get("url")
    text = data.get("text")

    if url:
        text = extract_text_from_url(url)

    if not text:
        return jsonify({"error": "No valid text or URL provided"}), 400

    questions = generate_questions(text)

    return jsonify({"questions": questions})

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Ensure the port is correct
