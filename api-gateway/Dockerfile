FROM nginx:latest

# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom routing configuration into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (Render automatically maps this to its internal routing)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
