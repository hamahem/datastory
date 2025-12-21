// Power Shift Data
const power_shift_data = {
  "shifts": [
    {
      "year": 1983,
      "from_dynasty_id": 0,
      "to_dynasty_id": 2,
      "from_sector": "Information Technology",
      "to_sector": "Information Technology",
      "main_cause": "dynasty_lifecycle",
      "gap_changes": {
        "market_share": 0.0,
        "purity": 0.0,
        "maturity": 0.0,
        "breadth": 0.0,
        "returns": 0.0,
        "survival": 1.0
      }
    },
    {
      "year": 1992,
      "from_dynasty_id": 2,
      "to_dynasty_id": 4,
      "from_sector": "Consumer Staples",
      "to_sector": "Industrials",
      "main_cause": "returns",
      "gap_changes": {
        "market_share": 0.0751,
        "purity": -0.01,
        "maturity": 0.0015,
        "breadth": -0.0016,
        "returns": 0.0881,
        "survival": 0.0044
      }
    },
    {
      "year": 1996,
      "from_dynasty_id": 4,
      "to_dynasty_id": 2,
      "from_sector": "Industrials",
      "to_sector": "Information Technology",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.2476,
        "purity": -0.0363,
        "maturity": -0.001,
        "breadth": 0.022,
        "returns": 0.0118,
        "survival": 0.0109
      }
    },
    {
      "year": 1999,
      "from_dynasty_id": 2,
      "to_dynasty_id": 5,
      "from_sector": "Financials",
      "to_sector": "Information Technology",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.2149,
        "purity": 0.0057,
        "maturity": 0.0096,
        "breadth": 0.0293,
        "returns": 0.0561,
        "survival": -0.0054
      }
    },
    {
      "year": 2002,
      "from_dynasty_id": 5,
      "to_dynasty_id": 2,
      "from_sector": "Financials",
      "to_sector": "Financials",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.1188,
        "purity": -0.0254,
        "maturity": -0.0071,
        "breadth": -0.0045,
        "returns": -0.0352,
        "survival": 0.0029
      }
    },
    {
      "year": 2003,
      "from_dynasty_id": 2,
      "to_dynasty_id": 1,
      "from_sector": "Financials",
      "to_sector": "Information Technology",
      "main_cause": "dynasty_lifecycle",
      "gap_changes": {
        "market_share": 0.0,
        "purity": 0.0,
        "maturity": 0.0,
        "breadth": 0.0,
        "returns": 0.0,
        "survival": 1.0
      }
    },
    {
      "year": 2005,
      "from_dynasty_id": 1,
      "to_dynasty_id": 6,
      "from_sector": "Information Technology",
      "to_sector": "Financials",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.2244,
        "purity": -0.0043,
        "maturity": 0.0083,
        "breadth": 0.0456,
        "returns": -0.006,
        "survival": 0.0117
      }
    },
    {
      "year": 2007,
      "from_dynasty_id": 6,
      "to_dynasty_id": 5,
      "from_sector": "Financials",
      "to_sector": "Energy",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.0515,
        "purity": 0.0021,
        "maturity": -0.0025,
        "breadth": 0.0115,
        "returns": 0.0222,
        "survival": -0.0106
      }
    },
    {
      "year": 2010,
      "from_dynasty_id": 5,
      "to_dynasty_id": 6,
      "from_sector": "Energy",
      "to_sector": "Financials",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.2889,
        "purity": -0.054,
        "maturity": 0.0019,
        "breadth": 0.0302,
        "returns": -0.0841,
        "survival": 0.0136
      }
    },
    {
      "year": 2012,
      "from_dynasty_id": 6,
      "to_dynasty_id": 5,
      "from_sector": "Energy",
      "to_sector": "Consumer Staples",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.2779,
        "purity": -0.0596,
        "maturity": -0.0015,
        "breadth": 0.0725,
        "returns": 0.0504,
        "survival": 0.0061
      }
    },
    {
      "year": 2014,
      "from_dynasty_id": 5,
      "to_dynasty_id": 6,
      "from_sector": "Health Care",
      "to_sector": "Information Technology",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.055,
        "purity": -0.0374,
        "maturity": 0.0013,
        "breadth": 0.0262,
        "returns": 0.0228,
        "survival": -0.0038
      }
    },
    {
      "year": 2015,
      "from_dynasty_id": 6,
      "to_dynasty_id": 5,
      "from_sector": "Information Technology",
      "to_sector": "Health Care",
      "main_cause": "market_share",
      "gap_changes": {
        "market_share": 0.0829,
        "purity": -0.0184,
        "maturity": -0.0011,
        "breadth": 0.0288,
        "returns": 0.0161,
        "survival": 0.0001
      }
    }
  ],
  "metadata": {
    "components": [
      "market_share",
      "purity",
      "maturity",
      "breadth",
      "returns",
      "survival"
    ],
    "weights": {
      "market_share": 0.35,
      "purity": 0.2,
      "maturity": 0.15,
      "breadth": 0.1,
      "returns": 0.1,
      "survival": 0.1
    }
  }
};
