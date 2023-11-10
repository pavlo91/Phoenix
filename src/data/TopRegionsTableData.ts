import india from 'assets/phoenix/img/country/india.png';
import china from 'assets/phoenix/img/country/china.png';
import usa from 'assets/phoenix/img/country/usa.png';
import southKorea from 'assets/phoenix/img/country/south-korea.png';
import vietnam from 'assets/phoenix/img/country/vietnam.png';
import russia from 'assets/phoenix/img/country/russia.png';
import australia from 'assets/phoenix/img/country/australia.png';
import england from 'assets/phoenix/img/country/england.png';
import indonesia from 'assets/phoenix/img/country/indonesia.png';
import japan from 'assets/phoenix/img/country/japan.png';

export type TopRegionsTableDataType = {
  country: {
    name: string;
    flag: string;
  };
  users: {
    number: number;
    percantage: string;
  };
  transactions: {
    number: number;
    percantage: string;
  };
  revenue: {
    number: number;
    percantage: string;
  };
  convRate: string;
};

export const topRegionsTableData: TopRegionsTableDataType[] = [
  {
    country: {
      name: 'India',
      flag: india
    },
    users: {
      number: 92896,
      percantage: '41.6%'
    },
    transactions: {
      number: 67,
      percantage: '34.3%'
    },
    revenue: {
      number: 7560,
      percantage: '36.9%'
    },
    convRate: '14.01%'
  },
  {
    country: {
      name: 'China',
      flag: china
    },
    users: {
      number: 50496,
      percantage: '32.8%'
    },
    transactions: {
      number: 54,
      percantage: '23.8%'
    },
    revenue: {
      number: 6532,
      percantage: '26.5%'
    },
    convRate: '23.56%'
  },
  {
    country: {
      name: 'USA',
      flag: usa
    },
    users: {
      number: 45679,
      percantage: '24.3%'
    },
    transactions: {
      number: 35,
      percantage: '19.7%'
    },
    revenue: {
      number: 5432,
      percantage: '16.9%'
    },
    convRate: '10.23%'
  },
  {
    country: {
      name: 'South Korea',
      flag: southKorea
    },
    users: {
      number: 36453,
      percantage: '19.7%'
    },
    transactions: {
      number: 22,
      percantage: '9.54%'
    },
    revenue: {
      number: 4673,
      percantage: '11.6%'
    },
    convRate: '8.85%'
  },
  {
    country: {
      name: 'Vietnam',
      flag: vietnam
    },
    users: {
      number: 15007,
      percantage: '11.9%'
    },
    transactions: {
      number: 17,
      percantage: '6.91%'
    },
    revenue: {
      number: 2456,
      percantage: '10.2%'
    },
    convRate: '6.01%'
  },
  {
    country: {
      name: 'Russia',
      flag: russia
    },
    users: {
      number: 54215,
      percantage: '32.9%'
    },
    transactions: {
      number: 38,
      percantage: '7.91%'
    },
    revenue: {
      number: 3254,
      percantage: '12.4%'
    },
    convRate: '6.21%'
  },
  {
    country: {
      name: 'Australia',
      flag: australia
    },
    users: {
      number: 54789,
      percantage: '12.7%'
    },
    transactions: {
      number: 32,
      percantage: '14.0%'
    },
    revenue: {
      number: 3215,
      percantage: '5.72%'
    },
    convRate: '12.02%'
  },
  {
    country: {
      name: 'England',
      flag: england
    },
    users: {
      number: 14785,
      percantage: '12.9%'
    },
    transactions: {
      number: 11,
      percantage: '32.91%'
    },
    revenue: {
      number: 4745,
      percantage: '10.2%'
    },
    convRate: '8.01%'
  },
  {
    country: {
      name: 'Indonesia',
      flag: indonesia
    },
    users: {
      number: 32156,
      percantage: '32.2%'
    },
    transactions: {
      number: 89,
      percantage: '12.0%'
    },
    revenue: {
      number: 2456,
      percantage: '23.2%'
    },
    convRate: '9.07%'
  },
  {
    country: {
      name: 'Japan',
      flag: japan
    },
    users: {
      number: 12547,
      percantage: '12.7%'
    },
    transactions: {
      number: 21,
      percantage: '14.91%'
    },
    revenue: {
      number: 2541,
      percantage: '23.2%'
    },
    convRate: '20.01%'
  }
];
