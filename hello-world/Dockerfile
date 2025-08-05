FROM public.ecr.aws/lambda/nodejs:20
 
# Copy package files
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy TypeScript source
COPY app.ts tsconfig.json ./
 
# Install TypeScript globally and compile
RUN npm install -g typescript
RUN npm run build
 
# Remove TypeScript files and dependencies not needed in production
RUN rm -f app.ts tsconfig.json
 
# Command can be overwritten by providing a different command in the template directly.
CMD ["dist/app.lambdaHandler"]