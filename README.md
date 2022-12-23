# Pangea Technical Challenge

Here there's a way to execute the project in a EC2 Server

## conecction to server

- [Download the pem in your local with this link](https://drive.google.com/file/d/1yV83_tUAfI2z03Qxn5fNrxzdUo4-v2rP/view?usp=share_link)

- You have to stay in the directory of file downloaded, run de follow command

```
ssh ubuntu@3.83.128.167 -i pangea-challenge.pem
```

- Now, you are in the intance

```bash
cd projects
cd pangea-challenge
```

- Start the project

```
npm run build
```

## Running the app

```bash
# production mode
npm run start:prod
```
