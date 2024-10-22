// app/api/getProvider/route.ts
const { getProvider } = await import('@how2validate/how2validate');

interface ProvidersResponse {
  status: number;
  app: string;
  data: {
    provider: string[];
  };
  timestamp: string;
}

export async function GET() {
  try {
    const providersResponse = await getProvider() as ProvidersResponse;
    const providers = providersResponse.data.provider; // Extract only the providers
    return new Response(JSON.stringify(providers), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching providers:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch providers' }), { status: 500 });
  }
}
