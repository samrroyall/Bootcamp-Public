from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def survey():
    return render_template("form.html")

@app.route("/result", methods=["POST"])
def result():
    results = {
        "name": request.form.get("name"),
        "location": request.form.get("location"),
        "language": request.form.get("language"),
        "comment": request.form.get("comment"),
    }
    return render_template("result.html", results=results)

if __name__ == "__main__":
    app.run(debug=True)