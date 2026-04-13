const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZW9iY2piYnp2cWl2c2dlcGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMDE2NzgsImV4cCI6MjA5MTY3NzY3OH0.zfqmc8x5hCv3gtJHf-twgwv5hP0xNa2OjCYVF1RZ6lU';

async function testGateway() {
  console.log("Testing NGINX Gateway: http://localhost/api/db/rest/v1/tenants");

  try {
    // We are querying localhost instead of xyz.supabase.co
    const response = await fetch('http://localhost/api/db/rest/v1/tenants?select=*', {
      headers: {
        'apikey': ANON_KEY,
        'Authorization': `Bearer ${ANON_KEY}`
      }
    });

    // Check headers returned by NGINX wrapper mapping to Supabase
    const serverHeader = response.headers.get('server');
    console.log(`HTTP Status: ${response.status}`);
    console.log(`Server Header: ${serverHeader} (Should be Supabase/PostgREST routed via NGINX)`);

    const data = await response.json();
    console.log("Payload Success! Found rows:", data.length);
    console.log(data);

  } catch (err) {
    console.error("Test Failed. Is Docker running?", err.message);
  }
}

testGateway();
