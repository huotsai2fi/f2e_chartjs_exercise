import axios from 'axios';

export default async function (auth) {
  const base_url = 'https://opendata.cwb.gov.tw';
  const endpoint = '/api/v1/rest/datastore/F-D0047-091';
  const result = await axios.get(`${base_url}${endpoint}`, {
    params: { Authorization: auth },
  });
  return result.data.records.locations[0];
}
