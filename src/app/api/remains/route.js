export async function GET() {
  try {
    const response = await fetch('https://twitterxdownload.com/api/remains', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    
    return Response.json({ 
      success: true,
      data: data.data
    });

  } catch (error) {
    console.error('Fetch error details:', {
    message: error.message,
    code: error.code,
    stack: error.stack,
    cause: error.cause
  });
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';