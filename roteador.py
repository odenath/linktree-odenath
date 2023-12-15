# # Python 3.x
# from http.server import SimpleHTTPRequestHandler
# from socketserver import TCPServer

# def run(server_class=TCPServer, handler_class=SimpleHTTPRequestHandler):
#     server_address = ('', 80)  # Servidor na localhost na porta 8000
#     httpd = server_class(server_address, handler_class)
#     print(f'Servindo na porta {server_address[1]}...')
#     httpd.serve_forever()
# run()