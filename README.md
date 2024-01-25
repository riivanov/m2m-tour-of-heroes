# To run the API

This assumes you have NPM and Node installed.

- If not download [NVM](https://github.com/nvm-sh/nvm).

As a conveniece the Linux commands for installing NVM/Node are provided. If you're using another OS please see the link above.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
nvm use --lts
node --version # 20.11.0
npm --version # 10.2.4
```

```bash
git clone https://github.com/riivanov/m2m-tour-of-heroes.git
cd m2m-tour-of-heroes
npm install --legacy-peer-deps
npm start
```

Navigate to `http://localhost:4200`
