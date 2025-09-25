
install-resource-server:
	cd resource_server && npm install

install-client:
	cd client_app && npm install

install-auth-server:
	cd authorization_server && npm install

install: install-resource-server install-client install-auth-server

start-resource-server:
	cd resource_server && npm start

start-client:
	cd client_app && npm start

start-auth-server:
	cd authorization_server && npm start
