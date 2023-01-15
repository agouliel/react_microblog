FROM nginx
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY certs/cert.pem /etc/nginx/cert.pem
COPY certs/key.pem /etc/nginx/key.pem

COPY build/ /usr/share/nginx/html/microblog/

COPY staticfiles/ /usr/share/nginx/html/djangostatic/
COPY media/ /usr/share/nginx/html/media/
