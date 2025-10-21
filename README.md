# report-generator

Report Generator.

## Installation

```sh
git clone https://github.com/resetcontrol/report-generator
cd report-generator
npm install
```

## Setup

### `.env` file

Create the `.env` file at the root of the project

```ini
REPORT_GENERATOR_PORT="3001"
REPORT_GENERATOR_APP_DATA="/path/to/data"
```

- `REPORT_GENERATOR_PORT`: Express server port.
- `REPORT_GENERATOR_APP_DATA`: Path to app data directory where generated files
  are stored.
