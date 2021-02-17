from flask import Flask, render_template, redirect, session

app = Flask(__name__)
app.secret_key = "0123456789"

@app.route("/")
def home():
    if "counter" in session:
        session["counter"] += 1
    else:
        session["counter"] = 0
    return render_template("index.html", count=session["counter"])

@app.route("/destroy_session")
def destroy_session():
    session.pop("counter")
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)

