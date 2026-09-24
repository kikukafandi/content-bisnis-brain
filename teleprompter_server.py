from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import json
import socket

state = {"id": 0, "last": ""}


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/state":
            body = json.dumps(state).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def do_POST(self):
        if self.path != "/command":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", 0))
        command = self.rfile.read(length).decode()
        if command not in {"toggle", "reset", "up", "down", "next", "back", "voice"}:
            self.send_error(400)
            return
        state.update(id=state["id"] + 1, last=command)
        self.send_response(204)
        self.end_headers()

    def log_message(self, format, *args):
        pass


host = socket.gethostbyname(socket.gethostname())
print("Teleprompter: http://localhost:8765/teleprompter.html")
print(f"Remote HP:    http://{host}:8765/teleprompter.html?remote")
print("Laptop dan HP harus memakai Wi-Fi yang sama.")
ThreadingHTTPServer(("0.0.0.0", 8765), Handler).serve_forever()
