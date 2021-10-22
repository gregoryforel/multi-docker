# BUILD PHASE
# We can tag this phase (or stage) with `as <STAGE>`
FROM node:alpine as builder

WORKDIR '/app'

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# BUILD PHASE
FROM nginx
# We need to expose the port in LIVE environment (to the exterior)
EXPOSE 3000
# Copy our nginx prod config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# This copies from the previous BUILD PHASE's build folder and dumps everything else.
COPY --from=builder /app/build /usr/share/nginx/html