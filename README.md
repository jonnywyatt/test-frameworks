## Cypress test

Update cypress.json file to set the FTSESSION env variable:

```
{
  "env": {
    "FTSESSION": "<hashed cookie value>"
  }
}
```

## Puppeteer test

Add a .env file in the repo root to set the FTSESSION env variable:

```
CYPRESS_FTSESSION="<hashed cookie value>"
```


## Comparison

[Google Sheet](https://docs.google.com/spreadsheets/d/1EPbjXr_mByvKdqP7LgPEW1yN4czqWDPTWc1lNtJENOo/edit?usp=sharing)