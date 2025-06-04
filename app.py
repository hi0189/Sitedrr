from flask import Flask, render_template
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)


@app.route('/')
def index():
    """Página principal do site"""
    return render_template('index.html')


@app.route('/sobre')
def sobre():
    """Página sobre (opcional)"""
    return render_template('index.html')


@app.route('/servicos')
def servicos():
    """Página de serviços (opcional)"""
    return render_template('index.html')


@app.route('/contato')
def contato():
    """Página de contato (opcional)"""
    return render_template('index.html')


if __name__ == '__main__':
    print("=== SERVIDOR INICIANDO ===")
    print("Site disponível em: http://localhost:5000")
    print("Pressione Ctrl+C para parar o servidor")

    app.run(debug=True, host='0.0.0.0', port=5000)