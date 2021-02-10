from flask import Flask

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):
    return "Sorry! No response. Try again."

@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/dojo")
def dojo():
    return "Dojo!"

@app.route("/say/<name>")
def say(name):
    return f"Hi {name.title()}!"

@app.route("/repeat/<int:n>/<word>")
def repeat(n, word):
    return f"{word} " * n

if __name__ == "__main__":
    app.run(debug=True)
    

