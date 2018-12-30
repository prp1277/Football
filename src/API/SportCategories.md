# Schemas

## Daily Odds Schema

```json
{
  "type": "object",
  "properties": {
    "generated_at": {
      "type": "string",
      "format": "date-time"
    },
    "sport": {
      "$ref": "../../includes/common/sport.json#/definitions/sportType"
    },
    "sport_events": {
      "type": "array",
      "items": {
        "$ref": "../../includes/oddscomparison/sport_event.json#/definitions/sportEventType"
      },
      "minItems": 1
    }
  },
  "required": [
    "generated_at",
    "sport",
    "sport_events"
  ]
}
```

## Category Schema

```json
{
  "type": "object",
  "properties": {
    "generated_at": {
      "type": "string",
      "format": "date-time"
    },
    "schema": {
      "type": "string"
    },
    "sport": {
      "$ref": "../../includes/common/sport.json#/definitions/sportType"
    },
    "categories": {
      "type": "array",
      "items": {
        "$ref": "../../includes/oddscomparison/category.json#/definitions/categoryType"
      }
    }
  },
  "required": [
    "generated_at",
    "sport"
  ]
}
```
## Sport Codes and Examples

### Football Details 

```json
{
  "generated_at": "2018-12-30T18:00:26+00:00",
  "schema": "http:\/\/schemas.sportradar.com\/bsa\/oddscomparison\/v1\/json\/endpoints\/oddscomparison\/sport_categories.json",
  "sport": {
    "id": "sr:sport:16",
    "name": "American Football"
  },
  "categories": [
    {
      "id": "sr:category:43",
      "name": "USA",
      "sport_id": "sr:sport:16",
      "country_code": "USA",
      "outrights": true
    }
  ]
}
```
### Sport Codes 

```json
{
  "generated_at": "2018-12-30T17:36:47+00:00",
  "schema": "http:\/\/schemas.sportradar.com\/bsa\/oddscomparison\/v1\/json\/endpoints\/oddscomparison\/sports.json",
  "sports": [
    {
      "id": "sr:sport:1",
      "name": "Soccer"
    },
    {
      "id": "sr:sport:2",
      "name": "Basketball"
    },
    {
      "id": "sr:sport:3",
      "name": "Baseball"
    },
    {
      "id": "sr:sport:4",
      "name": "Ice Hockey"
    },
    {
      "id": "sr:sport:5",
      "name": "Tennis"
    },
    {
      "id": "sr:sport:6",
      "name": "Handball"
    },
    {
      "id": "sr:sport:9",
      "name": "Golf"
    },
    {
      "id": "sr:sport:10",
      "name": "Boxing"
    },
    {
      "id": "sr:sport:11",
      "name": "Motorsport"
    },
    {
      "id": "sr:sport:12",
      "name": "Rugby"
    },
    {
      "id": "sr:sport:13",
      "name": "Aussie Rules"
    },
    {
      "id": "sr:sport:16",
      "name": "American Football"
    },
    {
      "id": "sr:sport:17",
      "name": "Cycling"
    },
    {
      "id": "sr:sport:18",
      "name": "Specials"
    },
    {
      "id": "sr:sport:19",
      "name": "Snooker"
    },
    {
      "id": "sr:sport:21",
      "name": "Cricket"
    },
    {
      "id": "sr:sport:22",
      "name": "Darts"
    },
    {
      "id": "sr:sport:23",
      "name": "Volleyball"
    },
    {
      "id": "sr:sport:35",
      "name": "Netball"
    },
    {
      "id": "sr:sport:44",
      "name": "Biathlon"
    },
    {
      "id": "sr:sport:46",
      "name": "Cross-Country"
    },
    {
      "id": "sr:sport:48",
      "name": "Ski Jumping"
    },
    {
      "id": "sr:sport:81",
      "name": "Sailing"
    },
    {
      "id": "sr:sport:90",
      "name": "Surfing"
    },
    {
      "id": "sr:sport:109",
      "name": "Counter-Strike"
    },
    {
      "id": "sr:sport:110",
      "name": "League of Legends"
    },
    {
      "id": "sr:sport:111",
      "name": "Dota 2"
    },
    {
      "id": "sr:sport:112",
      "name": "StarCraft"
    },
    {
      "id": "sr:sport:117",
      "name": "MMA"
    },
    {
      "id": "sr:sport:121",
      "name": "Overwatch"
    },
    {
      "id": "sr:sport:135",
      "name": "Gaelic Football"
    },
    {
      "id": "sr:sport:136",
      "name": "Gaelic Hurling"
    }
  ]
}
```

### Books Available

```json
{
  "generated_at": "2018-12-30T17:20:05+00:00",
  "schema": "http:\/\/schemas.sportradar.com\/bsa\/oddscomparison\/v1\/json\/endpoints\/oddscomparison\/books.json",
  "books": [
    {
      "id": "sr:book:6",
      "name": "Kambi2"
    },
    {
      "id": "sr:book:7",
      "name": "WilliamHill"
    },
    {
      "id": "sr:book:9",
      "name": "Ladbrokes"
    },
    {
      "id": "sr:book:12",
      "name": "bwin"
    },
    {
      "id": "sr:book:28",
      "name": "BetAtHome"
    },
    {
      "id": "sr:book:74",
      "name": "Bet365"
    },
    {
      "id": "sr:book:252",
      "name": "Betfair"
    },
    {
      "id": "sr:book:459",
      "name": "SBObet"
    },
    {
      "id": "sr:book:988",
      "name": "188BetCom"
    }
  ]
}
```
