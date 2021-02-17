from flask import Flask, render_template

app = Flask(__name__)

@app.route("/<int:x>/<int:y>/<color1>/<color2>")
@app.route("/<int:x>/<int:y>")
@app.route("/<int:y>")
@app.route("/")
def home(x=8, y=8, color1="red", color2="black"):
    print(f"color1: {color1}, color2: {color2}")
    return render_template(
        "board.j2", 
        rows=x, 
        cols=y, 
        color_one=color1,
        color_two=color2
    )

if __name__ == "__main__":
    app.run(debug=True)